import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCommunities,
  searchCommunities,
} from "../services/community-service";
import { getItemsByCommunity } from "../services/item-service";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunityCard from "../components/CommunityCard";
import { useUser } from "../contexts/UserContext";
import { createMember, getMemberById, getMembersByCommunityAndUser } from "../services/member-service";
import ConfirmModal from "../components/ConfirmModal";

 
const Home = () => {
  const user = useUser();
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState({
    communities: [],
    items: [],
  });
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedCommunityForJoin, setSelectedCommunityForJoin] = useState(null);
  
  

  async function getHomeData() {
    try {
      // Buscar comunidades que o usuário é membro
      const communities = await getCommunities();

      // Se o usuário tem comunidades, buscar itens de cada uma
      let allItems = [];
      if (communities && communities.length > 0) {
        // Buscar itens de todas as comunidades do usuário
        const itemsPromises = await communities.map((community) =>
          getItemsByCommunity(community.id)
        );

        const itemsArrays = await Promise.all(itemsPromises);



        // Combinar todos os arrays de itens em um único array
        allItems = itemsArrays.flat() || [];

        // Ordenar por data de criação (mais recentes primeiro) e pegar apenas 6
        allItems = allItems
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6);
      }

      return {
        communities,
        items: allItems,
      };
    } catch (error) {
      console.error("Error fetching home data", error);
      throw error;
    }
  }

  // Busca em tempo real (opcional)
  useEffect(() => {
    if (searchTerm.trim() && homeData.communities.length > 0) {
      const filteredCommunities = homeData.communities.filter(
        (community) =>
          community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          community.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Atualiza resultados locais em tempo real
      if (showSearchResults) {
        setSearchResults(filteredCommunities);
      }
    }
  }, [searchTerm, homeData.communities, showSearchResults]);

  // Carregar dados do backend
  useEffect(() => {
    async function loadHomeData() {
      try {
        setLoading(true);
        const data = await getHomeData();
        setHomeData(data);
      } catch (error) {
        console.error("Erro ao carregar dados da home:", error);
        setHomeData({
          communities: [],
          items: [],
        });
      } finally {
        setLoading(false);
      }
    }

    loadHomeData();
  }, []);

  // Handlers
  const handleQueroTrocar = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/");
    } else {
      navigate("/comunidades");
    }
  };

  const handleComoFunciona = () => {
    navigate("/como-funciona");
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      alert("Digite um nome da comunidade para buscar");
      return;
    }

    try {
      setIsSearching(true);

      const results = await searchCommunities(searchTerm.trim());

      let filteredResults = results;
      if (results.length === 0 && homeData.communities.length > 0) {
        filteredResults = homeData.communities.filter(
          (community) =>
            community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            community.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
      }

      setSearchResults(filteredResults);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Erro na busca:", error);

      const localResults = homeData.communities.filter(
        (community) =>
          community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          community.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(localResults);
      setShowSearchResults(true);

      if (localResults.length === 0) {
        alert("Erro ao buscar comunidades. Tente novamente.");
      }
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const handleCommunityClick = async (communityId) => {
    setSelectedCommunityId(communityId);
    const userId = user.user.id;
    const membership = await getMembersByCommunityAndUser(communityId, userId);
    console.log("Membership:", membership);
    const isMember = membership !== null;

    if (isMember) {
		navigate(`/community/${communityId}`);
    } else {
      // Mostrar modal para perguntar se o usuário quer entrar na comunidade
      const community = homeData.communities.find((c) => c.id === communityId);
      setSelectedCommunityForJoin(community);
      setShowJoinModal(true);
    }

    setSearchTerm("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const handleCloseModal = () => {
    setShowJoinModal(false);
    setSelectedCommunityForJoin(null);
  };

  const handleJoinCommunity = async () => {
    try {
      await createMember({
        userId: user.user.id,
        communityId: selectedCommunityForJoin.id,
        isAdmin: false,
      });
      setShowJoinModal(false);
      navigate(`/community/${selectedCommunityForJoin.id}`);
    } catch (error) {
      console.error("Erro ao entrar na comunidade:", error);
      setShowJoinModal(false);
    }
  };

  // Preparar dados para exibição
  const displayCommunities = showSearchResults
    ? searchResults
    : homeData.communities.length > 0
      ? homeData.communities.slice(0, 3)
      : [];

  const convertItemsToImages = (itemsArray) => {
    return itemsArray.map((item) => ({
      src: item.imageUrl || "src/assets/images/placeholder.jpg",
      alt: item.name || "Item disponível para troca",
    }));
  };

  const itemImages =
    homeData.items?.length > 0 ? convertItemsToImages(homeData.items) : [];
  const galeryImagesOne =
    itemImages.slice(0, 3)?.length >= 3 ? itemImages.slice(0, 3) : [];
  const galeryImagesTwo =
    itemImages.slice(3, 6)?.length >= 3 ? itemImages.slice(3, 6) : [];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] space-y-10 px-12">
        <section className="container mx-auto mt-5 flex space-x-40 bg-white">
          <div className="flex flex-col items-start gap-4">
            <div className="flex max-w-[636px] flex-col gap-4">
              <h1 className="relative mt-10 text-6xl leading-tight font-bold text-gray-900">
                <span className="block">Troque o que você</span>
                <span className="block">já não usa pelo</span>
                <span className="relative block text-blue-600">
                  que você precisa
                  <img
                    src="src/assets/svgs/underline.svg"
                    alt="underline"
                    className="absolute top-16 w-[380px] lg:max-w-[505px]"
                  />
                </span>
              </h1>
              <p className="mt-8 max-w-[546px] text-3xl text-[#79797d]">
                <span className="block">Encontre comunidades locais para</span>
                <span className="block">trocar itens sem gastar nada.</span>
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                className="ease h-16 w-56 cursor-pointer rounded-2xl bg-[var(--color-primary)] text-xl text-white transition-all duration-700 hover:bg-[var(--color-tertiary)] hover:text-white"
                onClick={handleQueroTrocar}
              >
                Quero trocar
              </button>
              <button
                className="ease h-16 w-56 cursor-pointer rounded-2xl border text-xl text-[var(--color-secondary)] transition-all duration-700 hover:bg-[var(--color-secondary)] hover:text-white"
                onClick={handleComoFunciona}
              >
                Como funciona
              </button>
            </div>
          </div>

          <div>
            <img
              src="src/assets/images/illustration-hero.svg"
              alt="image"
              className="hidden max-h-[446px] max-w-[450px] object-cover lg:block"
            />
          </div>
        </section>
        <section className="container mx-auto flex max-w-[1160px] flex-col gap-5 rounded-4xl border border-blue-600 px-12 pt-10 pb-12">
          <div className="flex items-center gap-2">
            <img src="src/assets/svgs/double-users-icon.svg" alt="usuários" />
            <h2 className="text-3xl font-medium">Encontre a sua comunidade</h2>
            <p className="ml-10 text-xl text-[#79767d]">
              Digite o nome da comunidade que você procura
            </p>
          </div>

          <div className="flex items-center">
            <form
              onSubmit={handleSearch}
              className="flex w-full items-center gap-5"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Digite o nome da comunidade"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-[68px] w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-10 py-5 text-lg text-[#938F96] outline-none"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-2xl bg-blue-600 text-white transition-colors duration-700 hover:bg-[var(--color-tertiary)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSearching ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  <img src="src/assets/svgs/lupa-icon.svg" alt="lupa" />
                )}
              </button>
            </form>
          </div>
        </section>
        <section className="">
          <h2 className="text-5xl font-medium text-[#111827]">
            {showSearchResults
              ? `Resultados da busca${searchTerm ? ` para "${searchTerm}"` : ""}`
              : "Comunidades mais acessadas"}
          </h2>
          <div className="flex items-center justify-between">
            <p className="mb-2 text-2xl text-[#79767d]">
              {showSearchResults
                ? `${searchResults.length} comunidade${searchResults.length !== 1 ? "s" : ""} encontrada${searchResults.length !== 1 ? "s" : ""}`
                : "Navegue pelas comunidades com mais membros"}
            </p>
            {!showSearchResults && (
              <button
                onClick={() => (window.location.href = "/comunidades")}
                className="flex cursor-pointer items-center rounded-full px-4 py-2 text-2xl text-[var(--color-secondary)] hover:underline hover:underline-offset-4"
              >
                Ver todas{" "}
                <img src="src/assets/svgs/arrow-left-icon.svg" alt="" />
              </button>
            )}
            {showSearchResults && (
              <button
                onClick={clearSearch}
                className="flex cursor-pointer items-center rounded-full px-4 py-2 text-2xl text-[var(--color-secondary)] hover:underline hover:underline-offset-4"
              >
                Limpar busca
              </button>
            )}
          </div>
          <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {displayCommunities.length === 0 && showSearchResults ? (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-2xl font-medium text-gray-700">
                  {searchTerm.trim()
                    ? "Nenhuma comunidade encontrada para essa busca"
                    : "Nenhuma comunidade disponível no momento"}
                </h3>
                <p className="mb-6 text-lg text-gray-500">
                  Tente buscar com outros termos ou{" "}
                  <button
                    onClick={clearSearch}
                    className="text-blue-600 hover:underline"
                  >
                    veja todas as comunidades
                  </button>
                </p>
              </div>
            ) : (
              homeData.communities.map((community) => {
                const isSelected = selectedCommunityId === community.id;
                return (
                  <CommunityCard
                    community={community}
                    key={community.id}
                    imageUrl={community.imageUrl}
                    categoryLabel="comunidade"
                    title={community.name || community.title}
                    description={community.description}
                    membersCount={community.membersCount || 0}
                    isSelected={isSelected}
                    onClick={() => handleCommunityClick(community.id)}
                  />
                );
              })
            )}
          </div>
        </section>
        <section className="container mx-auto">
          <h2 className="mb-4 text-5xl font-medium">Itens recém adicionados</h2>
          <p className="mb-6 text-2xl text-[#6B7280]">
            Veja o que você pode encontrar em nossas comunidades
          </p>

          {itemImages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="mb-4 text-6xl">📦</div>
              <h3 className="mb-2 text-2xl font-medium text-gray-700">
                Nenhum item encontrado
              </h3>
              <p className="text-lg text-gray-500">
                Seja o primeiro a adicionar itens nas comunidades!
              </p>
            </div>
          ) : (
            <div className="flex gap-6">
              {galeryImagesOne && galeryImagesOne?.length >= 3 && (
                <div className="max-w-lx mx-auto mb-40 grid grid-cols-3 gap-6">
                  <div className="col-span-2 row-span-2">
                    <img
                      src={galeryImagesOne[0].src}
                      alt={galeryImagesOne[0].alt}
                      className="aspect-square h-full max-h-[420px] w-full max-w-[410px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>

                  <div>
                    <img
                      src={galeryImagesOne[1].src}
                      alt={galeryImagesOne[1].alt}
                      className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={galeryImagesOne[2].src}
                      alt={galeryImagesOne[2].alt}
                      className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>
                </div>
              )}

              {galeryImagesTwo && galeryImagesTwo?.length >= 3 && (
                <div className="max-w-lx mx-auto mb-40 grid grid-cols-3 gap-6">
                  <div className="col-span-2 row-span-2">
                    <img
                      src={galeryImagesTwo[0].src}
                      alt={galeryImagesTwo[0].alt}
                      className="aspect-square h-full max-h-[420px] w-full max-w-[410px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>

                  <div>
                    <img
                      src={galeryImagesTwo[1].src}
                      alt={galeryImagesTwo[1].alt}
                      className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={galeryImagesTwo[2].src}
                      alt={galeryImagesTwo[2].alt}
                      className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
      <section className="flex h-[460px] w-full items-center justify-center gap-10 bg-[#1b5fff]">
        <div className="flex h-auto w-auto flex-col items-start justify-center">
          <h2 className="mb-3 text-6xl text-white">Baixe o nosso App</h2>
          <p className="mb-8 w-[410px] text-2xl font-light text-white">
            Tenha acesso completo à plataforma no
            <br /> seu celular. Receba notificações
            <br /> instantâneas e gerencie suas trocas.
          </p>
          <div className="flex gap-5">
            <button className="w-[200px] cursor-pointer rounded-xl border border-white px-10 py-3">
              <img src="src/assets/svgs/app-store-icon.svg" alt="App Store" />
            </button>
            <button className="w-[200px] cursor-pointer rounded-xl border border-white px-10 py-3">
              <img
                src="src/assets/svgs/googlePlay-icon.svg"
                alt="Google Play"
              />
            </button>
          </div>
        </div>
        <img
          src="src/assets/images/img-section-5-home.png"
          alt="ilustração de dois celulares"
          className="flex h-[400px] w-auto max-w-[50%] justify-end"
        />
      </section>
      <Footer />
      <ConfirmModal
        isOpen={showJoinModal}
        message={`Você deseja entrar na comunidade "${selectedCommunityForJoin?.name}"?`}
        onClose={handleCloseModal}
        onConfirm={handleJoinCommunity}
      />

    </div>
  );
};

export default Home;
