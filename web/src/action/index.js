import db, { auth, provider, storage } from "../firebase";
import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 

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
		auth.signInWithPopup(provider)
			.then((payload) => dispatch(setUser(payload.user)))
			.catch((err) => alert(err.message));
	};
}

export function signOutAPI() {
	return (dispatch) => {
		auth.signOut()
			.then(() => dispatch(setUser(null)))
			.catch((err) => alert(err.message));
	};
}

export function postArticleAPI(payload) {
	console.log(payload)
	return (dispatch) => {
		if (payload.image !== "") {
			dispatch(setLoading(true));
			const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
			upload.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				},
				(err) => alert(err),
				async () => {
					const downloadURL = await upload.snapshot.ref.getDownloadURL();
					addDoc(collection(db,"articles"),{
						actor: {
							// TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
							id: 'id',//payload.user.id,
							title:'' ,//payload.user.displayName,
							date: '',//payload.timestamp,
							image:'' ,//payload.user.photoURL,
						},
						video: payload.video,
						sharedImg: downloadURL,
						likes: {
							count: 0,
							whoLiked: [],
						},
						comments: 0,
						description: payload.description,
					});
					dispatch(setLoading(false));
				}
			);
		} else if (payload.video) {
			dispatch(setLoading(true));
			addDoc(collection(db,"articles"),{
				actor: {
					// TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
					id: 'id',//payload.user.id,
					title:'' ,//payload.user.displayName,
					date: '',//payload.timestamp,
					image:'' ,//payload.user.photoURL,
				},
				video: payload.video,
				sharedImg: "",
				likes: {
					count: 0,
					whoLiked: [],
				},
				comments: 0,
				description: payload.description,
			});
			dispatch(setLoading(false));
		} else if (payload.image === "" && payload.video === "") {
			dispatch(setLoading(true));
			addDoc(collection(db,"articles"), {
				actor: {
					// TODO: PEGAR USER ID DPS QUE TIVER LOGANDO
					id: 'id',//payload.user.id,
					title:'' ,//payload.user.displayName,
					date: '',//payload.timestamp,
					image:'' ,//payload.user.photoURL,
				},
				video: "",
				sharedImg: "",
				likes: {
					count: 0,
					whoLiked: [],
				},
				comments: 0,
				description: payload.description,
			});
			dispatch(setLoading(false));
		}
	};
}

export function getArticlesAPI() {
	return (dispatch) => {
		dispatch(setLoading(true));
		let payload;
		let id;
		collection(db,"articles")
		// TODO -> VER ISSO AQUI QUE N TA INDO
			// .orderBy("actor.date", "desc")
			// .onSnapshot((snapshot) => {
			// 	payload = snapshot.docs.map((doc) => doc.data());
			// 	id = snapshot.docs.map((doc) => doc.id);
			// 	dispatch(getArticles(payload, id));
			// });
		dispatch(setLoading(false));
	};
}

export function updateArticleAPI(payload) {
	return (dispatch) => {
		collection(db,"articles").doc(payload.id).update(payload.update);
	};
}
