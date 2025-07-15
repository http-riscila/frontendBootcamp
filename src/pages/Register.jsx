import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/user-service";
import maskGroup from "../assets/images/mask-group.png";
import star from "../assets/images/star3.png";
import group from "../assets/images/group.png";

export default function Register() {
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setUserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleCheckBoxChange(e) {
    setUserdata((prevData) => ({
      ...prevData,
      acceptedTerms: e.target.checked,
    }));
  }

  async function handleNewUser(e) {
    e.preventDefault();
    console.log("New user data: ", userData);
    try {
      if (!userData.acceptedTerms) {
        return console.error("terms must be accepted for registration");
      } else if (userData.confirmPassword !== userData.password) {
        return console.error("Password must match");
      }
      const newUser = await registerUser(userData);
      console.log("User succesfully registered", newUser);
      navigate("/");
    } catch (error) {
      console.error("Error registering a new user: ", error);
    } finally {
      setUserdata({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
      });
    }
  }

  return (
    <div className="flex flex-row bg-black min-h-screen w-full">
      <div className="relative w-1/2">
        <img
          src={maskGroup}
          alt="Mascara decorativa"
          className="w-full max-h-screen object-cover object-center"
        />
        <img src={star} className="absolute top-36 -right-28" />
      </div>
      <div className="flex justify-center items-center bg-white w-1/2">
        <div className="flex flex-col gap-10 text-center items-center">
          <img src={group} className="w-72 h-14" />

          <form onSubmit={handleNewUser} className="flex flex-col gap-6">
            <h2 className="text-4xl">Crie sua conta</h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome completo"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Senha"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              type="text"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirmar senha"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
            />

            <label
              htmlFor="accept"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="accept"
                checked={userData.acceptedTerms}
                onChange={handleCheckBoxChange}
                className="w-4 h-4 border border-[var(--color-primary)] rounded flex items-center justify-center bg-white checked:bg-[var(--color-primary)]"
              />
              <span className="text-sm text-gray-500">
                Concordo com os{" "}
                <a className="text-[var(--color-primary)] hover:underline cursor-pointer">
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a className="text-[var(--color-primary)] hover:underline cursor-pointer">
                  Política de Privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full p-2 text-white font-medium bg-[var(--color-primary)] rounded-xl cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]"
            >
              Criar conta
            </button>

            <p className="text-base text-gray-500">
              Já tem conta?{" "}
              <Link
                to="/"
                className="text-[var(--color-primary)] underline underline-offset-3 cursor-pointer"
              >
                Faça Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
