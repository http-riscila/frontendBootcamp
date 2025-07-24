import { useState } from "react";
import Header from "../components/Header";
import CommunityCard from "../components/CommunityCard";
import CreateAdModal from "../components/ProductDetail";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import memberIcon from "../assets/icons/member-icon.svg";

const mockAds = [
  {
    id: 1,
    image: "src/assets/images/image-04-section-4-home.png", // imagem de vestido floral longo
    title: "Vestido floral longo",
    status: "Usado",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    user: {
      name: "Carlos Silva",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.8,
    },
  },
  {
    id: 2,
    image:
      "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png", // calça jeans 44
    title: "Calça jeans 44",
    status: "Usado",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    user: {
      name: "Ana Tavares",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.8,
    },
  },
  {
    id: 3,
    image:
      "src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png", // sapato mocassim 35
    title: "Sapato mocassim 35",
    status: "Usado",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    user: {
      name: "Roberta Silva",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.8,
    },
  },
  {
    id: 4,
    image: "src/assets/images/img-section comun-camisa.png", // camiseta básica P
    title: "Camiseta básica P",
    status: "Usado",
    description:
      "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
    user: {
      name: "Roberta Silva",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.8,
    },
  },
];

const Community = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <Breadcrumb />

          {/* Community Info */}
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <img
                src="src/assets/images/Ellipse 20.png"
                alt="Bazar de roupas BR"
                className="h-20 w-20 rounded-full border-2 border-blue-200 object-cover"
              />
              <div>
                <h1 className="mb-1 text-2xl font-bold text-gray-900">
                  Bazar de roupas BR
                </h1>
                <p className="mb-2 text-gray-600">
                  Comunidade para troca de roupas em todo Brasil
                </p>
                <span className="flex items-center justify-start gap-2 text-xs text-gray-500">
                  <img src={memberIcon} />
                  2340 membros
                </span>
              </div>
            </div>
            <div></div>
            <button
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              onClick={() => setShowAddModal(true)}
            >
              + Criar Anúncio
            </button>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockAds.map((ad) => (
            <CommunityCard
              key={ad.id}
              image={ad.image}
              title={ad.title}
              status={ad.status}
              description={ad.description}
              user={ad.user}
            />
          ))}
        </div>
      </div>
      <CreateAdModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <Footer />
    </div>
  );
};

export default Community;
