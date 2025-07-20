import ArrowLeft from "./arrow-left";
import CommunityCard from "./community-card";
import { useState } from "react";

const communities = [
  {
    id: 1,
    imageUrl: "",
    categoryLabel: "roupas",
    title: "Bazar de roupas BR",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    membersCount: 2340,
  },
  {
    id: 2,
    imageUrl: "",
    categoryLabel: "cultura",
    title: "Livros e Cultura",
    description:
      "Troque livros, CDs, DVDs e outros itens culturais novos ou usados",
    membersCount: 876,
  },
  {
    id: 3,
    imageUrl: "",
    categoryLabel: "casa",
    title: "Casa e decoração",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    membersCount: 2100,
  },
];

const SectionThreeHome = () => {
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);

  const handleCommunityClick = (communityId) => {
    setSelectedCommunityId(communityId);
    console.log("Community clicked:", communityId);
  };

  return (
    <section>
      <h2 className="text-5xl text-[#111827] font-bold">
        Comunidades mais acessadas
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-[#79767d] text-2xl mb-2">
          Navegue pelas comunidades com mais membros
        </p>

        <button className="flex items-center text-[#fe7a1b] text-2xl rounded-full px-4 py-2 cursor-pointer">
          Ver todas <ArrowLeft />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1200px] mt-8 mb-20">
        {communities.map((community) => {
          const isSelected = selectedCommunityId === community.id;
          return (
            <CommunityCard
              key={community.id}
              imageUrl={community.imageUrl}
              categoryLabel={community.categoryLabel}
              title={community.title}
              description={community.description}
              membersCount={community.membersCount}
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