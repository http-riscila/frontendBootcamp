import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <main className="max-w-[1240px] mx-auto py-10 md:py-10 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 items-center">
      
        <div className="col-span-12 md:col-span-6 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-none text-title">
            Troque o que você já não usa por o<br />
            <span className="text-[#1B5FFF] underline decoration-[#1B5FFF] decoration-8 underline-offset-16">
              que você precisa
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl lg:tracking-wide lg:font-light lg:leading-tight text-[#79767d] max-w-lg mx-auto md:mx-0 lg:py-4">
            Encontre comunidades locais para trocar itens sem gastar nada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-[#1B5FFF] text-white hover:bg-[#1B5FFF] px-8 cursor-pointer">
              Quero trocar
            </Button>
            
            <Button outline size="lg" outlineColor="#fe7a1b" className="text-[#fe7a1b] hover:bg-[#fe7a1b] hover:text-white cursor-pointer">
            Como Funciona
          </Button>
          </div>
        </div>
        {/* Imagem */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="src/assets/images/illustration-hero.svg"
            width={700}
            height={400}
            alt="Illustration of item exchange"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}