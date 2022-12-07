import db, { auth, provider, storage } from "../firebase";
import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";

export function setUser(payload) {
  return {
    type: SET_USER,
    user: payload,
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING_STATUS,
    status: status,
  };
}

export function getArticles(payload, id) {
  return {
    type: GET_ARTICLES,
    payload: payload,
    id: id,
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signInAPI() {
  return (dispatch) => {
    console.log("dispatch");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(result.user);
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((err) => alert(err.message));
  };
}

export function postArticleAPI(payload) {
  console.log(payload);
  return (dispatch) => {
    if (payload.image !== "") {
      dispatch(setLoading(true));
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (err) => alert(err),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          addDoc(collection(db, "articles"), {
            actor: {
              // TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
              id: payload.user.email,
              title: payload.user.displayName,
              date: "07/12/2022",
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            likes: {
              count: 0,
              whoLiked: [],
            },
            comments: 0,
            description: payload.description,
            contact: payload.contact,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      dispatch(setLoading(true));
      addDoc(collection(db, "articles"), {
        actor: {
          // TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
          id: payload.user.email,
          title: payload.user.displayName,
          date: "07/12/2022",
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        likes: {
          count: 0,
          whoLiked: [],
        },
        comments: 0,
        description: payload.description,
        contact: payload.contact,
      });
      dispatch(setLoading(false));
    } else if (payload.image === "" && payload.video === "") {
      dispatch(setLoading(true));
      addDoc(collection(db, "articles"), {
        actor: {
          // TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
          id: payload.user.email,
          title: payload.user.displayName,
          date: "07/12/2022",
          image: payload.user.photoURL,
        },
        video: "",
        sharedImg: "",
        likes: {
          count: 0,
          whoLiked: [],
        },
        comments: 0,
        description: payload.description,
        contact: payload.contact,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  console.log("GETEeeeeeeeeE");
  return (dispatch) => {
    dispatch(setLoading(true));
    let payload;
    let id;
    collection(db, "articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        id = snapshot.docs.map((doc) => doc.id);
        dispatch(getArticles(payload, id));
      });
    dispatch(setLoading(false));
  };
}

export function getArticlesAPI2() {
  console.log("GETETETETETETE3");
  return (dispatch) => {
	  dispatch(setLoading(true));
    let payload;
    let id;
    console.log("11111111");
    getDocs(collection(db, "articles")).then((snapshot) => {
      console.log("aq");
      snapshot.docs.map((doc) => {
        payload = snapshot.docs.map((doc) => doc.data());
        id = snapshot.docs.map((doc) => doc.id);
        console.log(doc.data());
        console.log("22222");
        dispatch(getArticles(payload, id));
      });
    });
	dispatch(setLoading(false));
  };
}

export function updateArticleAPI(payload) {
  return (dispatch) => {
    collection(db, "articles").doc(payload.id).update(payload.update);
  };
}
