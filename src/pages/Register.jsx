import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/auth-service";
import { validateRegistration } from "../validators/register-validation";
import maskGroup from "../assets/images/mask-group.png";
import star from "../assets/images/star3.png";
import fullLogo from "../assets/images/full-logo.png";

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

    const errors = validateRegistration(userData);
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      Object.values(errors).forEach((msg) =>
        toast.warning(msg, {
          className: "toast-warning",
          progressClassName: "Toastify__progress-bar",
        })
      );
      setLoading(false);
      return;
    }

    if (!userData.acceptedTerms) {
      toast.warning("Os termos precisam ser aceitos para concluir o cadastro!");
      return;
    }

    if (userData.confirmPassword !== userData.password) {
      toast.warning("As senhas devem ser iguais!");
      return;
    }

    setLoading(true);
    console.log("New user data: ", userData);
    try {
      const newUser = await registerUser(userData);
      toast.success("Usuário criado com sucesso!", {
        className: "toast-success",
        progressClassName: "Toastify__progress-bar",
      });
      console.log("User succesfully registered", newUser);
      navigate("/");
    } catch (error) {
      toast.error("Erro ao registrar usuário", {
        className: "toast-error",
        progressClassName: "Toastify__progress-bar",
      });
      console.error("Error registering a new user: ", error);
    } finally {
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
      <div className="relative hidden w-1/2 transform transition-transform duration-700 md:visible md:block md:translate-x-0 md:opacity-100">
        <img
          src={maskGroup}
          alt="Mascara decorativa"
          className="max-h-screen w-full object-cover object-center"
        />
        <img
          src={star}
          className="absolute md:top-20 md:-right-16 md:h-50 md:w-50 lg:top-12 lg:-right-22 lg:h-62 lg:w-62"
        />
      </div>
      <div className="flex w-full transform items-center justify-center transition-transform duration-700 md:w-1/2 md:translate-x-0">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <img
            src={fullLogo}
            className="h-14 w-72 md:h-10 md:w-56 lg:h-14 lg:w-72"
          />

          <form
            onSubmit={handleNewUser}
            className="font-inter flex w-full max-w-[425px] flex-col items-center justify-center gap-4 md:max-w-[275px] md:text-base lg:max-w-[425px] lg:text-lg"
          >
            <h2 className="font-bricolage text-4xl text-[var(--color-title)] md:text-2xl lg:text-4xl">
              Crie sua conta
            </h2>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={16}
              placeholder="Nome"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Senha"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar senha"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
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
                className="flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-[var(--color-primary)] bg-white checked:bg-[var(--color-primary)]"
              />
              <span className="text-sm text-gray-500 md:text-xs lg:text-sm">
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
              className={`max-h-[54px] w-full p-2 font-semibold text-white md:max-h-[42px] lg:max-h-[54px] ${
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
