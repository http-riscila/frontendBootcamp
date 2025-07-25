import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import maskGroup from "../assets/images/mask-group.png";
import star from "../assets/images/star3.png";
import fullLogo from "../assets/images/full-logo.png";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    
    // Modo de desenvolvimento - bypass do backend
    if (credentials.email && credentials.password) {
      // Mock de resposta do backend
      const mockResponse = {
        user: {
          id: 1,
          name: "Usuário Teste",
          email: credentials.email,
          profileImageUrl: null
        },
        token: "mock-jwt-token-123"
      };
      
      localStorage.setItem("user", JSON.stringify(mockResponse.user));
      localStorage.setItem("token", mockResponse.token);
      console.log("Login simulado com sucesso");
      navigate("/home");
    } else {
      console.error("Por favor, preencha email e senha");
    }
    
    setCredentials({
      email: "",
      password: "",
    });
    setLoading(false);
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
        <div className="flex w-full flex-col items-center gap-10 text-center">
          <img
            src={fullLogo}
            className="h-14 w-72 md:h-10 md:w-56 lg:h-14 lg:w-72"
          />

          <form
            onSubmit={handleLogin}
            className="font-inter flex w-full max-w-[425px] flex-col items-center justify-center gap-6 md:max-w-[275px] md:text-base lg:max-w-[425px] lg:text-lg"
          >
            <h2 className="font-bricolage text-4xl text-[var(--color-title)] md:text-2xl lg:text-4xl">
              Entre na sua conta
            </h2>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              className="max-h-[58px] w-full rounded-xl border border-[var(--color-primary)] p-3 md:max-h-[46px] lg:max-h-[58px]"
              value={credentials.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={`max-h-[54px] w-full p-2 font-semibold text-white md:max-h-[42px] lg:max-h-[54px] ${
                loading
                  ? "bg-[var(--color-tertiary)]"
                  : "bg-[var(--color-primary)]"
              } cursor-pointer rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]`}
            >
              Login
            </button>

            <p className="text-gray-500">
              Não tem conta?{" "}
              <Link
                to="/cadastro"
                className="cursor-pointer text-[var(--color-primary)] underline underline-offset-3"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
