import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { countAcceptedProposals } from "../services/proposal-service";
import { countAvailableItems } from "../services/item-service";
import { countCreatedCommunities } from "../services/community-service";
import { getCommunitiesByUser } from "../services/community-service";
import { getItemsByUser } from "../services/item-service";
import {
  getProposalsBySender,
  getProposalsByRecipient,
} from "../services/proposal-service";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserModal from "../components/UserModal";
import CommunityCard from "../components/CommunityCard";
import AdCard from "../components/AdCard";
import ProposalCard from "../components/ProposalCard";
import ProductModal from "../components/ProductModal";
import photoBg from "../assets/images/profile-img-bg.png";
import profilePic from "../assets/icons/profile-pic.svg";

export default function UserDetails() {
  const [tradeCount, setTradeCount] = useState(0);
  const [activeAdCount, setActiveAdCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(0);

  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Troca de Roupas SP",
      description: "Comunidade para troca de roupas, sapatos e acessórios em São Paulo",
      memberCount: 150,
      imageUrl: "src/assets/images/casaEdecoração.png",
      createdBy: {
        name: "Maria Silva",
        imageUrl: null
      }
    }
  ]);
  const [ads, setAds] = useState([
    {
      id: 1,
      name: "Vestido floral longo",
      category: "Roupas",
      description: "Lindo vestido floral em perfeito estado para troca",
      imageUrl: "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png",
      images: [
        "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png",
        "src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png",
        "src/assets/images/casaEdecoração.png",
        "src/assets/images/image-01-section-4-home.jpg"
      ],
      createdBy: {
        name: "Maria Silva",
        imageUrl: null
      }
    }
  ]);
  const [proposalsBySender, setProposalsBySender] = useState([
    {
      id: 1,
      status: "pending",
      itemOffered: {
        name: "Camisa Social Azul",
        imageUrl: "src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png"
      },
      itemRequested: {
        name: "Vestido floral longo",
        imageUrl: "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png"
      },
      recipient: {
        name: "Ana Costa",
        imageUrl: null
      },
      createdAt: new Date()
    }
  ]);
  const [proposalsByRecipient, setProposalsByRecipient] = useState([
    {
      id: 1,
      status: "pending",
      itemOffered: {
        name: "Sapato Social Preto",
        imageUrl: "src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png"
      },
      itemRequested: {
        name: "Vestido floral longo",
        imageUrl: "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png"
      },
      sender: {
        name: "João Silva",
        imageUrl: null
      },
      createdAt: new Date()
    }
  ]);

  const [activeTab, setActiveTab] = useState("my-communities");

  const [selectedAd, setSelectedAd] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) return;

    async function fetchCounts() {
      try {
        const [trades, items, communities] = await Promise.all([
          countAcceptedProposals(user.id),
          countAvailableItems(user.id),
          countCreatedCommunities(user.id),
        ]);

        setTradeCount(trades);
        setActiveAdCount(items);
        setCommunityCount(communities);
      } catch (error) {
        console.log("Error fetching count data", error);
      }
    }
    fetchCounts();
    fetchCommunities();
    fetchAds();
    fetchProposalsBySender();
    fetchProposalsByRecipient();
  }, [user]);

  async function fetchCommunities() {
    try {
      const communitiesByUser = await getCommunitiesByUser(user.id);
      if (communitiesByUser > 0) {
        setCommunities(communitiesByUser);
      }
    } catch (error) {
      console.log("Error fetching communities", error);
    }
  }

  async function fetchAds() {
    try {
      const AdsByUser = await getItemsByUser(user.id);
      console.log("Ads carregados:", AdsByUser);
      if (AdsByUser && AdsByUser.length > 0) {
        setAds(AdsByUser);
      } else {
        console.log("Nenhum ad encontrado, mantendo dados de teste");
      }
    } catch (error) {
      console.log("Error fetching ads", error);
    }
  }

  async function fetchProposalsBySender() {
    try {
      const proposalsBySender = await getProposalsBySender(user.id);
      if (proposalsBySender > 0) {
        setProposalsBySender(proposalsBySender);
      }
    } catch (error) {
      console.log("Error fetching communities", error);
    }
  }

  async function fetchProposalsByRecipient() {
    try {
      const proposalsByRecipient = await getProposalsByRecipient(user.id);
      if (proposalsByRecipient > 0) {
        setProposalsByRecipient(proposalsByRecipient);
      }
    } catch (error) {
      console.log("Error fetching communities", error);
    }
  }

  const handleOpenModal = (ad) => {
    setSelectedAd(ad);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAd(null);
  };

  return (
    <div className="font-inter flex w-full flex-col bg-[var(--color-background)]">
      <Header />
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 py-8">
        <section className="flex flex-col gap-4">
          <Breadcrumb />
          <div className="flex flex-row gap-8">
            <div className="flex flex-row items-center gap-4 mt-6">
              <span className="relative h-32 w-32 rounded-full">
                {user?.profileImageUrl && (
                  <img
                    src={photoBg}
                    className="absolute top-0 left-0 h-full w-full"
                  />
                )}
                <img
                  src={user?.profileImageUrl || profilePic}
                  className="absolute top-0 left-0 h-full w-full rounded-full"
                />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-end gap-4">
                  <span className="font-bricolage text-4xl leading-none font-medium text-[var(--color-title)]">
                    {user?.name}
                  </span>
                  <button className="cursor-pointer">
                    <UserModal />
                  </button>
                </div>
                <span className="text-lg text-[var(--color-text)]">
                  Membro desde{" "}
                  {new Date(user?.createdAt).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </div>
            <div className="mx-8 h-[142px] w-px bg-[#E5E7EB]"></div>
            <div className="flex flex-1 flex-col justify-center gap-4">
              {user?.bio && (
                <p className="text-base text-[var(--color-text)]">{user.bio}</p>
              )}
              <ul className="font-bricolage flex flex-row justify-between text-lg font-medium text-[var(--color-title)]">
                <li className="flex flex-row items-center gap-1">
                  <span className="text-base text-[var(--color-primary)]">
                    {tradeCount ?? 0}
                  </span>{" "}
                  Trocas realizadas
                </li>
                <li className="flex flex-row items-center gap-1">
                  <span className="text-base text-[var(--color-primary)]">
                    {activeAdCount ?? 0}
                  </span>{" "}
                  Anúncios ativos
                </li>
                <li className="flex flex-row items-center gap-1">
                  <span className="text-base text-[var(--color-primary)]">
                    {communityCount ?? 0}
                  </span>{" "}
                  Comunidades criadas
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-6">
          <nav>
            <ul className="flex flex-row gap-6 text-md font-medium text-[var(--color-title)]">
              <li
                className={`rounded-xl px-4 py-1 transition-all duration-500 ease-in-out ${
                  activeTab === "my-communities"
                    ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                    : "text-[var(--color-title)]"
                } cursor-pointer hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]`}
              >
                <button
                  onClick={(e) => setActiveTab(e.currentTarget.id)}
                  id="my-communities"
                  className="cursor-pointer"
                >
                  Minhas comunidades
                </button>
              </li>
              <li
                className={`rounded-xl px-4 py-1 transition-all duration-500 ease-in-out ${
                  activeTab === "my-ads"
                    ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                    : "text-[var(--color-title)]"
                } cursor-pointer hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]`}
              >
                <button
                  onClick={(e) => setActiveTab(e.currentTarget.id)}
                  id="my-ads"
                  className="cursor-pointer"
                >
                  Meus anúncios
                </button>
              </li>
              <li
                className={`rounded-xl px-4 py-1 transition-all duration-500 ease-in-out ${
                  activeTab === "received-proposals"
                    ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                    : "text-[var(--color-title)]"
                } cursor-pointer hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]`}
              >
                <button
                  onClick={(e) => setActiveTab(e.currentTarget.id)}
                  id="received-proposals"
                  className="cursor-pointer"
                >
                  Propostas recebidas
                </button>
              </li>
              <li
                className={`rounded-xl px-4 py-1 transition-all duration-500 ease-in-out ${
                  activeTab === "sent-proposals"
                    ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                    : "text-[var(--color-title)]"
                } cursor-pointer hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]`}
              >
                <button
                  onClick={(e) => setActiveTab(e.currentTarget.id)}
                  id="sent-proposals"
                  className="cursor-pointer"
                >
                  Propostas enviadas
                </button>
              </li>
            </ul>
          </nav>
          <div>
            {activeTab === "my-ads" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ads.map((ad) => (
                  <AdCard 
                    key={ad.id} 
                    ad={ad}
                    onViewDetails={() => handleOpenModal(ad)}
                  />
                ))}
              </div>
            )}
            {activeTab === "my-communities" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communities.map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))}
              </div>
            )}
            {activeTab === "received-proposals" && (
              <div className="grid grid-cols-1 gap-4">
                {proposalsByRecipient.map((proposal) => (
                  <ProposalCard
                    type="received-proposals"
                    key={proposal.id}
                    proposal={proposal}
                  />
                ))}
              </div>
            )}
            {activeTab === "sent-proposals" && (
              <div className="grid grid-cols-1 gap-4">
                {proposalsBySender.map((proposal) => (
                  <ProposalCard
                    type="sent-proposals"
                    key={proposal.id}
                    proposal={proposal}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductModal 
        isOpen={showModal}
        onClose={handleCloseModal}
        ad={selectedAd}
      />

      <Footer />
    </div>
  );
}
