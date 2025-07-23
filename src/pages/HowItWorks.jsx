import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const steps = [
  {
    icon: "src/assets/images/Layer_1.png",
    number: 1,
    title: "Crie uma conta",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
  },
  {
    icon: "src/assets/images/Layer_1 (1).png",
    number: 2,
    title: "Explore as comunidades",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
  },
  {
    icon: "src/assets/images/Layer_1 (2).png",
    number: 3,
    title: "Anuncie na comunidade",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
  },
  {
    icon: "src/assets/images/Layer_1 (3).png",
    number: 4,
    title: "Aceite a proposta desejada",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
  },
  {
    icon: "src/assets/images/Layer_1 (4).png",
    number: 5,
    title: "Troque o seu item",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] px-12 py-8">
        <div className="flex flex-col gap-4">
          <Breadcrumb />
          {/* Título e subtítulo */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Veja como é fácil trocar itens
            </h1>
            <p className="mb-8 text-lg text-gray-500">
              Siga o passo a passo e tenha sucesso na sua troca
            </p>
          </div>
        </div>
        {/* Grid de passos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex h-full flex-col items-center rounded-lg border border-blue-300 bg-white p-6 text-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="mb-4 h-36 w-36"
              />
              <span className="mb-2 text-5xl font-bold text-[#1B5FFF]">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="px-4 text-base text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
