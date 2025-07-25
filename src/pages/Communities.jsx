import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CommunityCard from "../components/CommunityCard";
import CreateComunity from "../components/CreateComunity";
import { getCommunities, searchCommunities, createCommunity } from "../services/community-service";

const Communities = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carregar comunidades ao montar o componente
  const loadCommunities = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCommunities();
      setCommunities(data);
    } catch (err) {
      console.error("Erro ao carregar comunidades:", err);
      setError("Falha ao carregar as comunidades. Tente novamente.");
      setCommunities([]); // Limpa as comunidades em caso de erro
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCommunities();
  }, [loadCommunities]);

  // Função para buscar comunidades com filtro
  const handleSearch = useCallback(async (term) => {
    try {
      setLoading(true);
      setError(null);
      
      if (term.trim()) {
        const data = await searchCommunities(term);
        setCommunities(data);
      } else {
        await loadCommunities();
      }
    } catch (err) {
      console.error("Erro ao buscar comunidades:", err);
      setError("Falha ao buscar as comunidades. Tente novamente.");
      setCommunities([]); // Limpa as comunidades em caso de erro
    } finally {
      setLoading(false);
    }
  }, [loadCommunities]);

  // Função para criar nova comunidade
  const handleCreateCommunity = async (communityData) => {
    try {
      const newCommunity = await createCommunity(communityData);
      setCommunities(prev => [newCommunity, ...prev]);
      setShowCreateModal(false);
      console.log("Comunidade criada com sucesso:", newCommunity);
    } catch (err) {
      console.error("Erro ao criar comunidade:", err);
      // Em caso de erro, ainda fecha o modal mas mostra erro
      setShowCreateModal(false);
      setError("Erro ao criar comunidade");
    }
  };

  // Atualizar busca quando searchTerm muda
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500); // Debounce de 500ms

    return () => clearTimeout(timeoutId);
  }, [searchTerm, handleSearch]);

  const handleNavigateToCommunity = (communityId) => {
    navigate(`/community/${communityId}`);
  };

  const filteredCommunities = communities;

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Header />
      <div className="container mx-auto w-full max-w-[1240px] px-12 py-8">
        <div className="flex flex-col gap-4">
          <Breadcrumb />
          {/* Título e botão */}
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-gray-900">
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
        </div>
        
        {/* Estado de erro */}
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={loadCommunities}
              className="mt-2 text-red-700 underline hover:text-red-800"
            >
              Tentar novamente
            </button>
          </div>
        )}
        
        {/* Campo de busca */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Pesquisar por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-6 py-4 text-lg text-[#938F96] transition-all outline-none focus:ring-2 focus:ring-blue-300"
            disabled={loading}
          />
        </div>
        
        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary)]"></div>
            <span className="ml-3 text-gray-600">Carregando comunidades...</span>
          </div>
        )}
        
        {/* Grid de comunidades */}
        {!loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredCommunities.map((community) => (
              <CommunityCard
                key={community.id}
                image={community.imageUrl}
                title={community.name}
                description={community.description}
                category={community.category}
                membersCount={community.membersCount}
                onClick={() => handleNavigateToCommunity(community.id)}
              />
            ))}
            
            {filteredCommunities.length === 0 && !loading && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm ? 'Nenhuma comunidade encontrada para esta busca.' : 'Nenhuma comunidade disponível.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <CreateComunity
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateCommunity}
      />
      <Footer />
    </div>
  );
};

export default Communities;
