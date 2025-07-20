import { Underline } from "../components/underline";

const SectionOneHome = () => {
  return (
    <section className="flex gap-20 bg-white">
      <div>
        <div className="flex flex-col items-start max-w-[636px]">
          <h1 className="relative mt-10 text-[66px] font-bold leading-[76px] text-gray-900">
            Troque o que você
            <br /> já não usa por o<br />
            <span className="relative text-blue-600"> que você precisa</span>
            <Underline />
          </h1>
          <p className="max-w-[546px] mt-8 text-[32px] leading-[44px] text-[#79797d]">
            Encontre comunidades locais para <br /> trocar itens sem gastar
            nada.
          </p>
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            className="w-72 h-16 rounded-2xl text-xl text-white bg-[#1b5fff] hover:bg-[#1a4bcf] ease duration-200 cursor-pointer"
            href="#"
          >
            Quero trocar
          </button>
          <button
            className="w-72 h-16 rounded-2xl text-xl text-[#fe7a1b] border hover:bg-[#fe7a1b] hover:text-white ease duration-200 cursor-pointer"
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
          className="w-[450px] h-[446px] object-cover"
        />
      </div>
    </section>
  );
};

export default SectionOneHome;
