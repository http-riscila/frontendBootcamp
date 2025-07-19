import React from 'react';

const HowWorks = () => {
  return (
   <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">COMO FUNCIONA</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Desapegai</h2>
        <p className="mt-2 text-lg text-gray-600">Veja como é fácil trocar itens</p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 - Crie uma conta */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 13.svg" 
              alt="Criar conta" 
              className="w-6 h-6"
            />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Crie uma conta</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>

        {/* Card 2 - Explore as comunidades */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 14.svg" 
              alt="Explorar comunidades" 
              className="w-6 h-6"
            />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              2
            </span>

          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Explore as comunidades</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>

        {/* Card 3 - Anuncie na comunidade */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 15.svg" 
              alt="Anunciar item" 
              className="w-6 h-6"
            />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Anuncie na comunidade</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>

        {/* Card 4 - Aceite a proposta desejada */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 16.svg" 
              alt="Aceitar proposta" 
              className="w-6 h-6"
            />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              4
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Aceite a proposta desejada</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>

        {/* Card 5 - Troque o seu item */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 17.svg" 
              alt="Trocar item" 
              className="w-6 h-6"
            />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              5
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Troque o seu item</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>

        {/* Card 6 - Deixe sua avaliação */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/assets/images/Group 18.svg" 
              alt="Avaliar troca" 
              className="w-6 h-6"
            />

            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              6
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Deixe sua avaliação</h3>
          <p className="text-gray-600">Comunidade para troca de roupas, sapatos e acessórios em todo Brasil</p>
        </div>
      </div>

      {/* Seção Desapegai */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Desapegai</h2>
        <p className="text-gray-700 mb-6">
          Conectamos pessoas através de trocas sustentáveis: Transforme aquilo que você não usa mais em algo essencial para outra pessoa.
        </p>
        <p className="text-gray-500">© 2025 Desapegai. Faça parte da comunidade.</p>
      </div>

      {/* Rodapé com links */}
      <footer className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Links rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Como Funciona</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Suporte</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contato</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Política de Privacidade</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Termos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Termos de Uso</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Reportar Problema</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-4">Contato</h3>
          <ul className="space-y-2 text-gray-600">
            <li>(11) 5060-6909</li>
            <li>Centro, Cidade - Estado</li>
            <li>CEP: 12345-678</li>
            <li>contact@desapegai.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HowWorks;