import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth-service";
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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
      setLoading(false);
      setUserdata({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
      });
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-row bg-[var(--color-background)]">
      <div className="relative w-1/2">
        <img
          src={maskGroup}
          alt="Mascara decorativa"
          className="max-h-screen w-full object-cover object-center"
        />
        <img src={star} className="absolute top-18 -right-30 h-96 w-96" />
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex w-full flex-col items-center gap-10 text-center">
          <img src={group} className="h-14 w-72" />

          <form
            onSubmit={handleNewUser}
            className="font-inter flex w-full max-w-[425px] flex-col items-center justify-center gap-6 text-lg"
          >
            <h2 className="font-bricolage text-4xl text-[var(--color-title)]">
              Crie sua conta
            </h2>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={16}
              placeholder="Nome"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Senha"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar senha"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3"
              value={userData.confirmPassword}
              onChange={handleChange}
            />

            <label
              htmlFor="accept"
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                id="accept"
                checked={userData.acceptedTerms}
                onChange={handleCheckBoxChange}
                className="flex min-h-[22px] min-w-[22px] cursor-pointer items-center justify-center rounded border border-[var(--color-primary)] bg-white checked:bg-[var(--color-primary)]"
              />
              <span className="text-sm text-gray-500">
                Concordo com os{" "}
                <a className="cursor-pointer text-[var(--color-primary)] hover:underline">
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a className="cursor-pointer text-[var(--color-primary)] hover:underline">
                  Política de Privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              className={`max-h-[54px] w-full p-2 font-semibold text-white ${
                loading
                  ? "bg-[var(--color-tertiary)]"
                  : "bg-[var(--color-primary)]"
              } cursor-pointer rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]`}
            >
              Criar conta
            </button>

            <p className="text-gray-500">
              Já tem conta?{" "}
              <Link
                to="/"
                className="cursor-pointer text-[var(--color-primary)] underline underline-offset-3"
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
