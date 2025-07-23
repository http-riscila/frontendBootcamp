import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    icon: 'src/assets/images/Layer_1.png',
    number: 1,
    title: 'Crie uma conta',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
  {
    icon: 'src/assets/images/Layer_1 (1).png',
    number: 2,
    title: 'Explore as comunidades',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
  {
    icon: 'src/assets/images/Layer_1 (2).png',
    number: 3,
    title: 'Anuncie na comunidade',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
  {
    icon: 'src/assets/images/Layer_1 (3).png',
    number: 4,
    title: 'Aceite a proposta desejada',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
  {
    icon: 'src/assets/images/Layer_1 (4).png',
    number: 5,
    title: 'Troque o seu item',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
  {
    icon: 'src/assets/images/Layer_1 (5).png',
    number: 6,
    title: 'Deixe sua avaliação',
    description: 'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] px-12 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">Home</span> {'>'} <span className="text-blue-600 font-medium">Como Funciona</span>
        </nav>
        {/* Título e subtítulo */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Veja como é fácil trocar itens</h1>
        <p className="text-lg text-gray-500 mb-8">Siga o passo a passo e tenha sucesso na sua troca</p>
        {/* Grid de passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-blue-300 rounded-lg p-6 flex flex-col items-center text-center h-full">
              <img src={step.icon} alt={step.title} className="w-36 h-36 mb-4" />
              <span className="text-5xl font-bold text-[#1B5FFF] mb-2">{step.number}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-base text-gray-500 px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks; 