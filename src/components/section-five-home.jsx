import AppStoreIcon from "./app-store-icon";
import GooglePlayIcon from "./google-play-icon";

const SectionFiveHome = () => {
  return (
    <section className="flex h-[460px] w-full justify-center gap-10 bg-[#1b5fff] py-20">
      <div className="flex h-auto w-auto max-w-[50%] flex-col items-start py-20">
        <h2 className="mb-3 text-6xl font-normal text-white">
          Baixe o nosso App
        </h2>
        <p className="mb-8 w-[410px] text-3xl text-white">
          Tenha acesso completo à plataforma no seu celular. Receba notificações
          instantâneas e gerencie suas trocas.
        </p>
        <div className="flex gap-5">
          <button className="cursor-pointer rounded-xl border border-white px-10 py-4">
            <AppStoreIcon />
          </button>
          <button className="cursor-pointer rounded-xl border border-white px-10 py-4">
            <GooglePlayIcon />
          </button>
        </div>
      </div>
      <img
        src="src/assets/images/img-section-5-home.png"
        alt="ilustração de dois celulares"
        className="h-[400px] w-auto max-w-[50%]"
      />
    </section>
  );
};

export default SectionFiveHome;
