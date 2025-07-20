import { Underline } from "../components/underline";

const SectionOneHome = () => {
  return (
    <section className="container mx-auto flex gap-20 bg-white">
      <div>
        <div className="flex max-w-[636px] flex-col items-start">
          <h1 className="relative mt-10 text-[66px] leading-[76px] font-bold text-gray-900">
            Troque o que você
            <br /> já não usa por o<br />
            <span className="relative text-blue-600"> que você precisa</span>
            <Underline />
          </h1>
          <p className="mt-8 max-w-[546px] text-[32px] leading-[44px] text-[#79797d]">
            Encontre comunidades locais para <br /> trocar itens sem gastar
            nada.
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            className="ease h-16 w-72 cursor-pointer rounded-2xl bg-[#1b5fff] text-xl text-white duration-200 hover:bg-[#1a4bcf]"
            href="#"
          >
            Quero trocar
          </button>
          <button
            className="ease h-16 w-72 cursor-pointer rounded-2xl border text-xl text-[#fe7a1b] duration-200 hover:bg-[#fe7a1b] hover:text-white"
            color="bg-white"
            href="#"
          >
            Como funciona
          </button>
        </div>
      </div>
      <div>
        <img
          src="src/assets/images/image-section-one-home.png"
          alt="image"
          className="h-[446px] w-[450px] object-cover"
        />
      </div>
    </section>
  );
};

export default SectionOneHome;
