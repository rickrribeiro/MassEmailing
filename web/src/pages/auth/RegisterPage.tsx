import { FormEvent, useEffect, useState } from "react";
import "./AuthPages.css";
import axios from "axios";
import { Input } from "../../components/forms/input";
import { MapPin,  ArrowDown  } from "phosphor-react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  nacionality: string;
  currentLocation?: string;
}

interface Country {
  id: string;
  name: string;
}

function RegisterPage() {
  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.name || !data.passowrd) {
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/games/${data.game}/ads`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
          nacionality: data.nacionality,
          currentLocation: data.currentLocation,
        }
      );

      alert("User criado com sucesso! {TROCAR POR UM FLASH BONITINHO }");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar usuário! {TROCAR POR UM FLASH BONITINHO }");
    }
  }

  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    axios("http://192.168.0.31:3000/countries").then((response) => {
      setCountries(response.data);
    });
  }, []);

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
                    onSubmit={handleCreateUser}
                  >
                  
                <h1 className="text-3xl font-bold">Register</h1>

                    <div className="flex flex-col gap-2">
                      <label className="font-semibold" htmlFor="name">Name</label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="Menino Ney"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold" htmlFor="name">Email</label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="neymar@hexa.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold" htmlFor="name">Password</label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="******"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">

                    <div className="flex flex-col gap-2">
                      <label className="font-semibold">Select your nacionality     </label>
                      <select
                        id="game"
                        name="game"
                        className="bg-zinc-300 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select a country &nbsp;⬇️
                        </option>

                        {countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    </div>

                    <footer className="mt-4 flex justify-end gap-4">
                      <button
                        type="submit"
                        className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                      >
                        Create
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

export default RegisterPage;
