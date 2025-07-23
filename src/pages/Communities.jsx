import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunityCard from "../components/CommunityCard";
import CreateComunity from "../components/CreateComunity";

const mockCommunities = [
  {
    id: 1,
    imageUrl: "",
    name: "Bazar de roupas BR",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    membersCount: 2340,
    category: "Roupas",
  },
  {
    id: 2,
    imageUrl: "src/assets/images/livro.png",
    name: "Livros e cultura",
    description:
      "Troque livros, CDs, DVDs e outros itens culturais novos ou usados",
    membersCount: 876,
    category: "Livros e cultura",
  },
  {
    id: 3,
    imageUrl: "src/assets/images/casaEdecoração.png",
    name: "Casa e decoração",
    description: "Comunidade para troca de itens de casa e decoração",
    membersCount: 2100,
    category: "Casa e decoração",
  },
  // Repita para preencher o grid
  {
    id: 4,
    imageUrl: "",
    name: "Eletrônicos e Games",
    description:
      "Troque dispositivos eletrônicos, videogames, consoles e acessórios",
    membersCount: 1580,
    category: "Eletrônicos",
  },
  {
    id: 5,
    imageUrl: "",
    name: "Esportes e Fitness",
    description:
      "Equipamentos esportivos, roupas de treino e acessórios fitness",
    membersCount: 950,
    category: "Esportes",
  },
  {
    id: 6,
    imageUrl: "",
    name: "Infantil",
    description:
      "Roupas, brinquedos e acessórios para crianças de todas as idades",
    membersCount: 1750,
    category: "Infantil",
  },
  {
    id: 7,
    imageUrl: "",
    name: "Beleza e Cuidados",
    description: "Cosméticos, produtos de beleza e cuidados pessoais",
    membersCount: 1320,
    category: "Beleza",
  },
  {
    id: 8,
    imageUrl: "",
    name: "Artesanato e Hobbies",
    description: "Materiais para crafts, hobbies e atividades criativas",
    membersCount: 680,
    category: "Artesanato",
  },
  {
    id: 9,
    imageUrl: "",
    name: "Vintage e Colecionáveis",
    description: "Itens antigos, retrô e colecionáveis únicos",
    membersCount: 890,
    category: "Vintage",
  },
];

const Communities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredCommunities = mockCommunities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] px-12 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-4 text-sm text-gray-500">
          <span className="cursor-pointer hover:underline">Home</span> {">"}{" "}
          <span className="font-medium text-[var(--color-primary)]">
            Comunidades
          </span>
        </nav>
        {/* Título e botão */}
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-1 text-4xl font-bold text-gray-900">
              Explore nossas comunidades
            </h1>
            <p className="text-lg text-gray-500">
              Encontre comunidades baseadas nos seus interesses
            </p>
          </div>
          <button
            className="mt-2 h-12 cursor-pointer rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors duration-700 hover:bg-[var(--color-tertiary)] md:mt-0"
            onClick={() => setShowCreateModal(true)}
          >
            + Criar Comunidade
          </button>
        </div>
        {/* Campo de busca */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Pesquisar por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-6 py-4 text-lg text-[#938F96] transition-all outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        {/* Grid de comunidades */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              image={community.imageUrl}
              title={community.name}
              description={community.description}
              category={community.category}
              membersCount={community.membersCount}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
      <CreateComunity
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
      <Footer />
    </div>
  );
};

export default Communities;
