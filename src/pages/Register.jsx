import maskGroup from "../assets/images/mask-group.png";
import star from "../assets/images/star3.png";
import group from "../assets/images/group.png";

export default function Register() {
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

          <form className="flex flex-col gap-6">
            <h2 className="text-4xl">Crie sua conta</h2>
            <input
              placeholder="Nome completo"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
            />
            <input
              placeholder="Email"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
            />
            <input
              placeholder="Senha"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
            />
            <input
              placeholder="Confirmar senha"
              className="border border-[var(--color-primary)] p-3 rounded-xl"
            />

            <div className="flex flex-row items-center gap-1">
              <input
                type="checkbox"
                id="accept"
                className="appearance-none w-4 h-4 border border-[var(--color-primary)] rounded cursor-pointer"
              />
              <label htmlFor="accept" className="text-sm text-gray-500">
                Concordo com os{" "}
                <span className="text-[var(--color-primary)]">
                  Termos de Uso
                </span>{" "}
                e{" "}
                <span className="text-[var(--color-primary)]">
                  Política de Privacidade
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full p-2 text-white bg-[var(--color-primary)] rounded-xl cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]"
            >
              Criar conta
            </button>

            <p className="text-base text-gray-500">
              Já tem conta?{" "}
              <a className="text-[var(--color-primary)] underline cursor-pointer">
                Faça Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
