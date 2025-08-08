import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import AdCard from "../components/AdCard";
import CreateAdModal from "../components/ProductDetail";
import ProductModal from "../components/ProductModal";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import memberIcon from "../assets/icons/member-icon.svg";
import {
  getCommunityById,
  getCommunityAds,
  createCommunityAd,
  searchCommunityAds,
} from "../services/community-service";

const Community = () => {
  const { communityId } = useParams();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [community, setCommunity] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adsLoading, setAdsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Carregar dados da comunidade
  const loadCommunityData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCommunityById(communityId);
      setCommunity(data);
    } catch (err) {
      console.error("Erro ao carregar dados da comunidade:", err);
      setError("Falha ao carregar os dados da comunidade. Tente novamente.");
      setCommunity(null);
    } finally {
      setLoading(false);
    }
  }, [communityId]);

  // Carregar anúncios da comunidade
  const loadCommunityAds = useCallback(async () => {
    try {
      setAdsLoading(true);
      const data = await getCommunityAds(communityId);
      setAds(data);
    } catch (err) {
      console.error("Erro ao carregar anúncios da comunidade:", err);
      setError("Falha ao carregar os anúncios. Tente novamente.");
      setAds([]);
    } finally {
      setAdsLoading(false);
    }
  }, [communityId]);

  // useEffect após definição dos métodos
  useEffect(() => {
    if (communityId) {
      loadCommunityData();
      loadCommunityAds();
    } else {
      setError("Nenhuma comunidade selecionada.");
      setLoading(false);
      setAdsLoading(false);
    }
  }, [communityId, loadCommunityData, loadCommunityAds]);

  const handleSearchAds = useCallback(
    async (term) => {
      try {
        setAdsLoading(true);
        if (term.trim()) {
          const data = await searchCommunityAds(communityId, term);
          setAds(data);
        } else {
          await loadCommunityAds();
        }
      } catch (err) {
        console.error("Erro ao buscar anúncios:", err);
        setError("Falha ao buscar anúncios. Tente novamente.");
        setAds([]);
      } finally {
        setAdsLoading(false);
      }
    },
    [communityId, loadCommunityAds]
  );

  const handleCreateAd = async (adData) => {
    try {
      const newAd = await createCommunityAd(communityId, adData);
      setAds((prev) => [newAd, ...prev]);
      setShowAddModal(false);
      console.log("Anúncio criado com sucesso:", newAd);
    } catch (err) {
      console.error("Erro ao criar anúncio:", err);
      setShowAddModal(false);
    }
  };

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setShowDetailsModal(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (communityId) {
        handleSearchAds(searchTerm);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, communityId, handleSearchAds]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <Breadcrumb />

          {/* Error State */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => {
                  loadCommunityData();
                  loadCommunityAds();
                }}
                className="mt-2 text-red-700 underline hover:text-red-800"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* Community Info */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">
                Carregando comunidade...
              </span>
            </div>
          ) : community ? (
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={community.imageUrl || '/placeholder-community.png'}
                  alt={community.name}
                  className="h-20 w-20 rounded-full border-2 border-blue-200 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/80x80/e5e7eb/9ca3af?text=C';
                  }}
                />
                <div>
                  <h1 className="mb-1 text-2xl font-bold text-gray-900">
                    {community.name}
                  </h1>
                  <p className="mb-2 text-gray-600">{community.description}</p>
                  <div className="flex items-center gap-3">
                    {community.category && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {community.category}
                      </span>
                    )}
                    <span className="flex items-center justify-start gap-2 text-xs text-gray-500">
                      <img src={memberIcon} alt="Membros" />
                      {community.membersCount} membros
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                onClick={() => setShowAddModal(true)}
              >
                + Criar Anúncio
              </button>
            </div>
          ) : null}

          {/* Search Bar */}
          {!loading && (
            <div className="mb-6">
              <input
                type="text"
                placeholder="Buscar anúncios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-blue-500 focus:outline-none"
                disabled={adsLoading}
              />
            </div>
          )}

          {/* Ads Loading */}
          {adsLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Carregando anúncios...</span>
            </div>
          )}

          {/* Ads Grid */}
          {!adsLoading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {ads.map((ad) => (
                <AdCard key={ad.id} ad={ad} onViewDetails={handleViewDetails} />
              ))}

              {ads.length === 0 && !adsLoading && (
                <div className="col-span-full py-12 text-center">
                  <p className="text-lg text-gray-500">
                    {searchTerm
                      ? "Nenhum anúncio encontrado para esta busca."
                      : "Nenhum anúncio disponível nesta comunidade."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <CreateAdModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleCreateAd}
        />
        <ProductModal
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
          ad={selectedAd}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Community;
