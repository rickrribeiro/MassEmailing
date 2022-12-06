import { FormEvent, useEffect, useState } from "react";
import "./AuthPages.css";
import axios from "axios";
import { Input } from "../../components/forms/input";
import { MapPin } from "phosphor-react";

interface User {
  id: string;
  email: string;
  password: string;
}

function LoginPage() {
  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.passowrd) {
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/games/${data.game}/ads`,
        {
          email: data.email,
          password: data.password,
        }
      );

      alert("Login {Botar flash bonitinho e JWT }");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar usuário! {TROCAR POR UM FLASH BONITINHO }");
    }
  }

  // <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
  return (
    <div className="authForm">
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
                  <form
                    className="mt-8 flex flex-col gap-4"
                    onSubmit={handleLogin}
                  >
                  
                <h1 className="text-3xl font-bold">Login</h1>

                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-semibold" htmlFor="name">Email</label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="neymar@hexa.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-semibold" htmlFor="name">Password "TODO: ESCONDER A SENHA"</label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="******"
                      />
                    </div>
                   

                    <footer className="mt-8 flex justify-center gap-4">
                      <button
                        type="submit"
                        className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                      >
                        Login
                        <MapPin className="w-6 h-6" />
                      </button>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
