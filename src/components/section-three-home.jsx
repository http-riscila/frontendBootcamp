import ArrowLeft from "./arrow-left";
import CommunityCard from "./community-card";
import { useState } from "react";

const fallbackCommunities = [
  {
    id: 1,
    imageUrl: "",
    category: "roupas",
    title: "Bazar de roupas BR",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    membersCount: 2340,
  },
  {
    id: 2,
    imageUrl: "",
    category: "cultura",
    title: "Livros e Cultura",
    description:
      "Troque livros, CDs, DVDs e outros itens culturais novos ou usados",
    membersCount: 876,
  },
  {
    id: 3,
    imageUrl: "",
    category: "casa",
    title: "Casa e decoração",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    membersCount: 2100,
  },
];

const SectionThreeHome = ({ communities = [] }) => {
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);

  const displayCommunities =
    communities.length > 0 ? communities.slice(0, 3) : fallbackCommunities;

  const handleCommunityClick = (communityId) => {
    setSelectedCommunityId(communityId);
    console.log("Community clicked:", communityId);
  };

  return (
    <section className="container mx-auto">
      <h2 className="text-5xl font-bold text-[#111827]">
        Comunidades mais acessadas
      </h2>
      <div className="flex items-center justify-between">
        <p className="mb-2 text-2xl text-[#79767d]">
          Navegue pelas comunidades com mais membros
        </p>

        <button className="flex cursor-pointer items-center rounded-full px-4 py-2 text-2xl text-[#fe7a1b]">
          Ver todas <ArrowLeft />
        </button>
      </div>
      <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayCommunities.map((community) => {
          const isSelected = selectedCommunityId === community.id;
          return (
            <CommunityCard
              key={community.id}
              imageUrl={community.imageUrl}
              categoryLabel={community.category || "geral"}
              title={community.title}
              description={community.description}
              membersCount={community.membersCount || 0}
              isSelected={isSelected}
              onClick={() => handleCommunityClick(community.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionThreeHome;
