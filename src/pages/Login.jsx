import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import maskGroup from "../assets/images/mask-group.png";
import star from "../assets/images/star3.png";
import group from "../assets/images/group.png";

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
    try {
      const user = await login(credentials);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
      }
      console.log("User succesfully logged in", user);
      navigate("/home");
    } catch (error) {
      console.error("Error authenticating an user", error);
    } finally {
      setCredentials({
        email: "",
        password: "",
      });
      setLoading(false);
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
        <img src={star} className="absolute scale-86 top-18 -right-30" />
      </div>
      <div className="flex justify-center items-center bg-white w-1/2">
        <div className="flex flex-col gap-10 text-center items-center w-full">
          <img src={group} className="w-72 h-14" />

          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center items-center gap-6 w-full"
          >
            <h2 className="text-4xl text-[var(--color-title)]">
              Entre na sua conta
            </h2>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-3/5 border border-[var(--color-primary)] p-3 rounded-xl"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              className="w-3/5 border border-[var(--color-primary)] p-3 rounded-xl"
              value={credentials.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={`w-3/5 p-2 text-white font-medium ${
                loading
                  ? "bg-[var(--color-tertiary)]"
                  : "bg-[var(--color-primary)]"
              }
               rounded-xl cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]`}
            >
              Login
            </button>

            <p className="text-base text-gray-500">
              Não tem conta?{" "}
              <Link
                to="/cadastro"
                className="text-[var(--color-primary)] underline underline-offset-3 cursor-pointer"
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
