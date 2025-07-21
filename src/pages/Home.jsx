import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeApi } from "../services/home-api";

import CommunityCard from "../components/community-card";

const Home = () => {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState({
    communities: [],
    items: [],
  });
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);

  // Dados de fallback
  const fallbackCommunities = [
    {
      id: 1,
      imageUrl: "",
      name: "Bazar de roupas BR",
      description:
        "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil",
      membersCount: 2340,
    },
    {
      id: 2,
      imageUrl: "",
      name: "Livros e Cultura",
      description:
        "Troque livros, CDs, DVDs e outros itens culturais novos ou usados",
      membersCount: 876,
    },
    {
      id: 3,
      imageUrl: "",
      name: "Casa e decoração",
      description: "Comunidade para troca de itens de casa e decoração",
      membersCount: 2100,
    },
  ];

  const fallbackImagesOne = [
    {
      src: "src/assets/images/image-01-section-4-home.jpg",
      alt: "Tabuleiro de xadrez",
    },
    {
      src: "src/assets/images/image-02-section-4-home.png",
      alt: "Bicicleta infantil azul",
    },
    {
      src: "src/assets/images/image-03-section-4-home.png",
      alt: "Conjunto de panelas inox",
    },
  ];

  const fallbackImagesTwo = [
    {
      src: "src/assets/images/image-04-section-4-home.png",
      alt: "Vestido adulto estampado",
    },
    {
      src: "src/assets/images/image-05-section-4-home.jpg",
      alt: "Furadeira e parafusadeira",
    },
    {
      src: "src/assets/images/image-06-section-4-home.png",
      alt: "Livro de receitas",
    },
  ];

  // Carregar dados do backend
  useEffect(() => {
    loadHomeData();
  }, []);

  async function loadHomeData() {
    try {
      setLoading(true);
      const data = await homeApi.getHomeData();
      setHomeData(data);
    } catch (error) {
      console.error("Erro ao carregar dados da home:", error);
      // Fallback em caso de erro
      setHomeData({
        communities: [],
        items: [],
      });
    } finally {
      setLoading(false);
    }
  }

  // Handlers
  const handleQueroTrocar = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate("/add-item"); // ou a rota que vocês definirem
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      console.log("Digite um nome para buscar");
      return;
    }

    try {
      const results = await homeApi.searchCommunities(searchTerm);
      console.log("Resultados da busca:", results);
      // TODO: Implementar navegação para página de resultados
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  const handleCommunityClick = (communityId) => {
    setSelectedCommunityId(communityId);
    console.log("Community clicked:", communityId);
    // TODO: Implementar navegação para página da comunidade
  };

  // Preparar dados para exibição
  const displayCommunities =
    homeData.communities.length > 0
      ? homeData.communities.slice(0, 3)
      : fallbackCommunities;

  const convertItemsToImages = (itemsArray) => {
    return itemsArray.map((item) => ({
      src: item.imageUrl || "src/assets/images/placeholder.jpg",
      alt: item.name || "Item disponível para troca",
    }));
  };

  const itemImages =
    homeData.items.length > 0 ? convertItemsToImages(homeData.items) : [];
  const galeryImagesOne =
    itemImages.slice(0, 3).length >= 3
      ? itemImages.slice(0, 3)
      : fallbackImagesOne;
  const galeryImagesTwo =
    itemImages.slice(3, 6).length >= 3
      ? itemImages.slice(3, 6)
      : fallbackImagesTwo;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-18">
      <section className="container mx-auto flex gap-20 bg-white">
        <div>
          <div className="flex max-w-[636px] flex-col items-start">
            <h1 className="relative mt-10 text-[66px] leading-[76px] font-bold text-gray-900">
              Troque o que você
              <br /> já não usa por o<br />
              <span className="relative text-blue-600"> que você precisa</span>
              <img
                src="src/assets/svgs/underline.svg"
                alt="underline"
                className="absolute top-74 w-[520px]"
              />
            </h1>
            <p className="mt-8 max-w-[546px] text-[32px] leading-[44px] text-[#79797d]">
              Encontre comunidades locais para <br /> trocar itens sem gastar
              nada.
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              className="ease h-16 w-72 cursor-pointer rounded-2xl bg-[#1b5fff] text-xl text-white duration-200 hover:bg-[#1a4bcf]"
              onClick={handleQueroTrocar}
            >
              Quero trocar
            </button>
            <button className="ease h-16 w-72 cursor-pointer rounded-2xl border text-xl text-[#fe7a1b] duration-200 hover:bg-[#fe7a1b] hover:text-white">
              Como funciona
            </button>
          </div>
        </div>
        <div>
          <img
            src="src/assets/images/image-section-one-home.png"
            alt="image"
            className="h-[446px] w-[450px] object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto flex max-w-[1160px] flex-col gap-5 rounded-[36px] border border-blue-600 px-12 pt-10 pb-12">
        <div className="flex items-center gap-2">
          <img src="src/assets/svgs/double-users-icon.svg" alt="usuários" />
          <h2 className="text-[32px] text-[#1b5fff]">
            Encontre a sua comunidade
          </h2>
          <p className="ml-10 text-xl text-[#79767d]">
            Digite o nome da comunidade que você procura
          </p>
        </div>

        <div className="flex items-center">
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-[800px] items-center gap-5"
          >
            <input
              type="text"
              placeholder="Digite o nome da comunidade"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[68px] w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-10 py-5 text-lg text-[#938F96] outline-none"
            />
            <button
              type="submit"
              className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-2xl bg-blue-600 text-white transition-colors hover:bg-blue-700"
            >
              <img src="src/assets/svgs/lupa-icon.svg" alt="lupa" />
            </button>
          </form>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-5xl font-bold text-[#111827]">
          Comunidades mais acessadas
        </h2>
        <div className="flex items-center justify-between">
          <p className="mb-2 text-2xl text-[#79767d]">
            Navegue pelas comunidades com mais membros
          </p>
          <button className="flex cursor-pointer items-center rounded-full px-4 py-2 text-2xl text-[#fe7a1b]">
            Ver todas <img src="src/assets/svgs/arrow-left-icon.svg" alt="" />
          </button>
        </div>
        <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayCommunities.map((community) => {
            const isSelected = selectedCommunityId === community.id;
            return (
              <CommunityCard
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
          })}
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="mb-4 text-5xl font-bold">Itens recém adicionados</h2>
        <p className="mb-6 text-[#6B7280]">
          Veja o que você pode encontrar em nossas comunidades
        </p>
        <div className="flex gap-6">
          {galeryImagesOne && galeryImagesOne.length >= 3 && (
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

          {galeryImagesTwo && galeryImagesTwo.length >= 3 && (
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
      </section>

      <section className="flex h-[460px] w-full justify-center gap-10 bg-[#1b5fff] py-20">
        <div className="flex h-auto w-auto max-w-[50%] flex-col items-start py-20">
          <h2 className="mb-3 text-6xl font-normal text-white">
            Baixe o nosso App
          </h2>
          <p className="mb-8 w-[410px] text-3xl text-white">
            Tenha acesso completo à plataforma no seu celular. Receba
            notificações instantâneas e gerencie suas trocas.
          </p>
          <div className="flex gap-5">
            <button className="cursor-pointer rounded-xl border border-white px-10 py-4">
              <img src="src/assets/svgs/app-store-icon.svg" alt="App Store" />
            </button>
            <button className="cursor-pointer rounded-xl border border-white px-10 py-4">
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
          className="h-[400px] w-auto max-w-[50%]"
        />
      </section>
    </div>
  );
};

export default Home;
