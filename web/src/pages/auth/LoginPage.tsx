import { FormEvent, useEffect, useState } from "react";
import "./AuthPages.css";
import axios from "axios";
import { Input } from "../../components/forms/input";
import { MapPin } from "phosphor-react";
import { useHistory } from "react-router-dom";
import { signInAPI } from "../../action";
import { connect } from "react-redux";
import { Redirect } from "react-router";

interface LoginProps {
  user: Object,
  signIn: any
};

function LoginPage(props) {
  // console.log("Props")
  // console.log(props)
  // let navigate = useHistory();
  // if (props.user) return navigate.push("/");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.passowrd) {
      return;
    }

    try {
      // const response = await axios.post(
      //   `http://localhost:3000/games/${data.game}/ads`,
      //   {
      //     email: data.email,
      //     password: data.password,
      //   }
      // );

      // alert("Login {Botar flash bonitinho e JWT }");
    } catch (err) {
      console.log(err);
      // alert("Erro ao criar usuário! {TROCAR POR UM FLASH BONITINHO }");
    }
  }

  // const [auth, setAuth] = useState<Boolean>(false)
  // useEffect(() => {
  //   if(auth){

  //     console.log("AAAAAAAAAAAAA")
  //     props.signIn()
  //   }
  // }, [auth]);


  // <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
  return (
    <div className="authForm">
      {props.user && <Redirect to="/" />}
      <section className="mt-8 flex flex-col gap-4" id="registerForm">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="registerFormCard  card rounded-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100"
                  id="registerPhoto"
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  <div
                    className="mt-8 flex flex-col gap-4"
                  >
                    <h1 className="text-3xl font-bold">Login</h1>

                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-semibold" htmlFor="name">
                        Email
                      </label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="neymar@hexa.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-semibold" htmlFor="name">
                        Password
                      </label>
                      <Input name="name" id="name" placeholder="******" />
                    </div>

                    <footer className="mt-8 flex justify-center gap-4">
                      <div>
                        <div>
                          <button
                            type="submit"
                            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                          >
                            Sign in
                            <MapPin className="w-6 h-6" />
                            
                          </button>
                        </div>
                        <div className="mt-5 gdiv">
                          <button
                            id="googleLogin"
                            onClick={() => props.signIn()}
                          >
                            <img src="/images/google.svg" alt="" />
                            Sign in with Google
                          </button>

                        </div>
                        <div className="mt-5 gdiv">
                          <button
                            id="googleLogin"
                            onClick={() => props.signIn()}
                          >
                           <svg height="50%" viewBox="0 0 20 20" width="10%" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026A9.555 9.555 0 0110 4.836a9.59 9.59 0 012.504.337c1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48A10 10 0 0020 10c0-5.522-4.478-10-10-10" fill="#191717" fillRule="evenodd"></path></svg>
                            Sign in with Github

                          </button>

                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log("state")
  // console.log(state)
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = (dispatch) => ({
	signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
