import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommunityCard from '../components/CommunityCard';
import ConfirmModal from '../components/ConfirmModal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  createMember,
  getCommunitiesWithMemberCount,
  getMemberByUserAndCommunity,
  mockUsers,
} from '../mocks';
import { homeApi } from '../services/home-api';

const Home = () => {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState({
    communities: [],
    items: [],
  });
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedCommunityForJoin, setSelectedCommunityForJoin] =
    useState(null);

  // Dados de fallback
  const fallbackCommunities = [
    {
      id: 1,
      imageUrl: '',
      name: 'Bazar de roupas BR',
      description:
        'Comunidade para troca de roupas, sapatos e acessórios em todo Brasil',
      membersCount: 2340,
    },
    {
      id: 2,
      imageUrl: '',
      name: 'Livros e Cultura',
      description:
        'Troque livros, CDs, DVDs e outros itens culturais novos ou usados',
      membersCount: 876,
    },
    {
      id: 3,
      imageUrl: '',
      name: 'Casa e decoração',
      description: 'Comunidade para troca de itens de casa e decoração',
      membersCount: 2100,
    },
  ];

  const fallbackImagesOne = [
    {
      src: 'src/assets/images/image-01-section-4-home.jpg',
      alt: 'Tabuleiro de xadrez',
    },
    {
      src: 'src/assets/images/image-02-section-4-home.png',
      alt: 'Bicicleta infantil azul',
    },
    {
      src: 'src/assets/images/image-03-section-4-home.png',
      alt: 'Conjunto de panelas inox',
    },
  ];

  const fallbackImagesTwo = [
    {
      src: 'src/assets/images/image-04-section-4-home.png',
      alt: 'Vestido adulto estampado',
    },
    {
      src: 'src/assets/images/image-05-section-4-home.jpg',
      alt: 'Furadeira e parafusadeira',
    },
    {
      src: 'src/assets/images/image-06-section-4-home.png',
      alt: 'Livro de receitas',
    },
  ];

  // Carregar dados do backend
  useEffect(() => {
    async function loadHomeData() {
      try {
        setLoading(true);
        const data = await homeApi.getHomeData();
        setHomeData(data);
      } catch (error) {
        console.error('Erro ao carregar dados da home:', error);
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
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      navigate('/add-item'); //Todo: verificar a rota correta depois
    } else {
      navigate('/');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      console.log('Digite um nome para buscar');
      return;
    }

    try {
      const results = await homeApi.searchCommunities(searchTerm);
      console.log('Resultados da busca:', results);
      // TODO: Implementar navegação para página de resultados
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  // Preparar dados para exibição
  const convertItemsToImages = (itemsArray) => {
    return itemsArray.map((item) => ({
      src: item.imageUrl || 'src/assets/images/placeholder.jpg',
      alt: item.name || 'Item disponível para troca',
    }));
  };

  const communitiesData = getCommunitiesWithMemberCount();
  const mockUser = mockUsers.find((user) => user.id === 'user-1');

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

  const handleCommunityClick = (communityId) => {
    setSelectedCommunityId(communityId);
    const user = mockUser;

    // Verificar se o usuário é membro da comunidade usando a nova estrutura
    const membership = getMemberByUserAndCommunity(user.id, communityId);
    const isMember = membership !== null;

    if (isMember) {
      navigate(`/community/${communityId}`);
    } else {
      // Mostrar modal para perguntar se o usuário quer entrar na comunidade
      const community = communitiesData.find((c) => c.id === communityId);
      setSelectedCommunityForJoin(community);
      setShowJoinModal(true);
    }
  };

  const handleJoinCommunity = () => {
    try {
      const user = mockUser;
      createMember(user.id, selectedCommunityForJoin.id, false);
      setShowJoinModal(false);
      navigate(`/community/${selectedCommunityForJoin.id}`);
    } catch (error) {
      console.error('Erro ao entrar na comunidade:', error);
      setShowJoinModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowJoinModal(false);
    setSelectedCommunityForJoin(null);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-blue-500 border-b-2" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] space-y-10 px-12">
        <section className="container mx-auto mt-5 flex space-x-40">
          <div className="flex flex-col items-start gap-4">
            <div className="flex max-w-[636px] flex-col gap-4">
              <h1 className="relative mt-10 font-bold text-6xl text-gray-900">
                Troque o que você
                <br /> já não usa por o<br />
                <span className="relative text-blue-600">
                  {' '}
                  que você precisa
                </span>
                <img
                  alt="underline"
                  className="absolute top-48 w-[520px]"
                  src="src/assets/svgs/underline.svg"
                />
              </h1>
              <p className="mt-8 max-w-[546px] text-3xl text-[#79797d]">
                Encontre comunidades locais para <br /> trocar itens sem gastar
                nada.
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                className="ease h-16 w-56 cursor-pointer rounded-2xl bg-[#1b5fff] text-white text-xl transition-all duration-700 hover:bg-[var(--color-tertiary)]"
                onClick={handleQueroTrocar}
                type="button"
              >
                Quero trocar
              </button>
              <button
                className="ease h-16 w-56 cursor-pointer rounded-2xl border text-[#fe7a1b] text-xl transition-all duration-700 hover:bg-[#fe7a1b] hover:text-white"
                type="button"
              >
                Como funciona
              </button>
            </div>
          </div>

          <div>
            <img
              alt="imagem"
              className="h-[446px] w-[450px] object-cover"
              src="src/assets/images/image-section-one-home.png"
            />
          </div>
        </section>
        <section className="container mx-auto flex max-w-[1160px] flex-col gap-5 rounded-4xl border border-blue-600 px-12 pt-10 pb-12">
          <div className="flex items-center gap-2">
            <img alt="usuários" src="src/assets/svgs/double-users-icon.svg" />
            <h2 className="font-medium text-3xl">Encontre a sua comunidade</h2>
            <p className="ml-10 text-[#79767d] text-xl">
              Digite o nome da comunidade que você procura
            </p>
          </div>

          <div className="flex items-center">
            <form
              className="flex w-full items-center gap-5"
              onSubmit={handleSearch}
            >
              <input
                className="h-[68px] w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-10 py-5 text-[#938F96] text-lg outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite o nome da comunidade"
                type="text"
                value={searchTerm}
              />
              <button
                className="flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-2xl bg-blue-600 text-white transition-colors hover:bg-blue-700"
                type="submit"
              >
                <img alt="lupa" src="src/assets/svgs/lupa-icon.svg" />
              </button>
            </form>
          </div>
        </section>
        <section className="">
          <h2 className="font-medium text-5xl text-[#111827]">
            Comunidades mais acessadas
          </h2>
          <div className="flex items-center justify-between">
            <p className="mb-2 text-2xl text-[#79767d]">
              Navegue pelas comunidades com mais membros
            </p>
            <button
              className="flex cursor-pointer items-center rounded-full px-4 py-2 text-2xl text-[#fe7a1b]"
              type="button"
            >
              Ver todas <img alt="" src="src/assets/svgs/arrow-left-icon.svg" />
            </button>
          </div>
          <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {communitiesData.map((community) => {
              const isSelected = selectedCommunityId === community.id;
              return (
                <CommunityCard
                  categoryLabel="comunidade"
                  description={community.description}
                  imageUrl={community.imageUrl}
                  isSelected={isSelected}
                  key={community.id}
                  membersCount={community.membersCount || 0}
                  onClick={() => handleCommunityClick(community.id)}
                  title={community.name}
                />
              );
            })}
          </div>
        </section>
        <section className="container mx-auto">
          <h2 className="mb-4 font-medium text-5xl">Itens recém adicionados</h2>
          <p className="mb-6 text-2xl text-[#6B7280]">
            Veja o que você pode encontrar em nossas comunidades
          </p>
          <div className="flex gap-6">
            {galeryImagesOne && galeryImagesOne.length >= 3 && (
              <div className="mx-auto mb-40 grid max-w-lx grid-cols-3 gap-6">
                <div className="col-span-2 row-span-2">
                  <img
                    alt={galeryImagesOne[0].alt}
                    className="aspect-square h-full max-h-[420px] w-full max-w-[410px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesOne[0].src}
                  />
                </div>

                <div>
                  <img
                    alt={galeryImagesOne[1].alt}
                    className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesOne[1].src}
                  />
                </div>
                <div>
                  <img
                    alt={galeryImagesOne[2].alt}
                    className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesOne[2].src}
                  />
                </div>
              </div>
            )}

            {galeryImagesTwo && galeryImagesTwo.length >= 3 && (
              <div className="mx-auto mb-40 grid max-w-lx grid-cols-3 gap-6">
                <div className="col-span-2 row-span-2">
                  <img
                    alt={galeryImagesTwo[0].alt}
                    className="aspect-square h-full max-h-[420px] w-full max-w-[410px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesTwo[0].src}
                  />
                </div>

                <div>
                  <img
                    alt={galeryImagesTwo[1].alt}
                    className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesTwo[1].src}
                  />
                </div>
                <div>
                  <img
                    alt={galeryImagesTwo[2].alt}
                    className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
                    src={galeryImagesTwo[2].src}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <section className="flex h-[460px] w-full justify-center gap-10 bg-[#1b5fff] py-20">
        <div className="flex h-auto w-auto max-w-[50%] flex-col items-start py-20">
          <h2 className="mb-3 font-normal text-6xl text-white">
            Baixe o nosso App
          </h2>
          <p className="mb-8 w-[410px] font-light text-3xl text-white">
            Tenha acesso completo à plataforma no seu celular. Receba
            notificações instantâneas e gerencie suas trocas.
          </p>
          <div className="flex gap-5">
            <button
              className="cursor-pointer rounded-xl border border-white px-10 py-4"
              type="button"
            >
              <img alt="App Store" src="src/assets/svgs/app-store-icon.svg" />
            </button>
            <button
              className="cursor-pointer rounded-xl border border-white px-10 py-4"
              type="button"
            >
              <img
                alt="Google Play"
                src="src/assets/svgs/googlePlay-icon.svg"
              />
            </button>
          </div>
        </div>
        <img
          alt="ilustração de dois celulares"
          className="h-[400px] w-auto max-w-[50%]"
          src="src/assets/images/img-section-5-home.png"
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
