import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CommunityCard from "../components/CommunityCard";
import CreateComunity from "../components/CreateComunity";
import {
  getCommunities,
  searchCommunities,
} from "../services/community-service";
import {
  createMember,
  getMembersByCommunityAndUser,
} from "../services/member-service";
import { useCommunities } from "../queries/use-communities.js";
import { useDebounce } from "../hooks/use-debounce.js";
import {toast} from "react-toastify";

const Communities = () => {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  // const [communities, setCommunities] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const searchRef = useRef(null);

  const filters = {
    page: Number(searchParams.get("page")) || 1,
    // limit: 10,
    orderBy: searchParams.get("orderBy") || "memberCount",
    orderDirection: searchParams.get("orderDirection") || "desc",
    search: searchParams.get("search") || "",
  };

  const { data, isLoading} = useCommunities(filters);

  const communities = data?.communities || [];
  // const totalPages = data?.totalPages || 0;

  console.log("Search Params:", searchParams.toString());

  useEffect(() => {
    // Atualiza os searchParams só quando o valor debounced mudar
    if (debouncedSearch) {
      const search = debouncedSearch.toString().trimStart().trimEnd();
      searchParams.set("search", search);
    } else {
      searchParams.delete("search");
    }

    searchParams.set("page", "1");

    navigate({
      pathname: "/comunidades",
      search: `?${new URLSearchParams(searchParams).toString()}`,
    });
  }, [debouncedSearch, searchParams]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef]);


  const handleFilterChange = (filterKey, value, direction) => {
    if (debouncedSearch) {
      const search = debouncedSearch.toString().trimStart().trimEnd();
      console.log("Search to set in params:", search);
      setSearchTerm(search);
    }

    if (!value) {
      searchParams.delete(filterKey);
    } else {
      if (filterKey === "orderBy" && direction) {
        searchParams.set("orderDirection", direction);
      }
      searchParams.set(filterKey, value);
    }

    searchParams.set("page", "1");
    navigate({
      pathname: "/comunidades",
      search: `?${new URLSearchParams(searchParams).toString()}`,
    });
  };

  const { user } = useUser();

  // Carregar comunidades ao montar o componente
  // const loadCommunities = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getCommunities();
  //     setCommunities(data);
  //   } catch (err) {
  //     console.error("Erro ao carregar comunidades:", err);
  //     setCommunities([]); // Limpa as comunidades em caso de erro
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   loadCommunities();
  // }, [loadCommunities]);

  // // Função para buscar comunidades com filtro
  // const handleSearch = useCallback(
  //   async (term) => {
  //     try {
  //       setLoading(true);
  //
  //       if (term.trim()) {
  //         const data = await searchCommunities(term);
  //         setCommunities(data);
  //       } else {
  //         await loadCommunities();
  //       }
  //     } catch (err) {
  //       console.error("Erro ao buscar comunidades:", err);
  //       setCommunities([]); // Limpa as comunidades em caso de erro
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [loadCommunities]
  // );

  // // Atualizar busca quando searchTerm muda
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     handleSearch(searchTerm);
  //   }, 500); // Debounce de 500ms
  //
  //   return () => clearTimeout(timeoutId);
  // }, [searchTerm, handleSearch]);


  // const handleCommunityCreated = (newCommunity) => {
  //   setCommunities((prev) => [newCommunity, ...prev]);
  // };

  // const filteredCommunities = communities;
  console.log("Communities:", communities);

  const orderByOptions = [
    { label: "Mais Recentes", value: "createdAt", orderDirection: "desc" },
    { label: "Mais Antigas", value: "createdAt", orderDirection: "asc" },
    { label: "Nome A-Z", value: "name", orderDirection: "asc" },
    { label: "Nome Z-A", value: "name" , orderDirection: "desc" },
    { label: "Membros Decrescente", value: "memberCount", orderDirection: "desc" },
    { label: "Membros Crescente", value: "memberCount", orderDirection: "asc" },
  ];

  console.log("Filters applied:", filters);

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

        {/* Campo de busca */}
        <div className="mb-6">
          <input
            ref={searchRef}
            type="text"
            placeholder="Pesquisar por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-14 w-full rounded-2xl border border-[#1b5fff] bg-[#F7F2FA] px-6 py-4 text-lg text-[#938F96] transition-all outline-none focus:ring-2 focus:ring-blue-300"
            disabled={isLoading}
          />
        </div>

        <section className={"mb-6 flex flex-col items-start gap-4"}>
          <div className={"flex flex-col items-start gap-2"}>
            <label htmlFor={"Ordenar Por"}>Ordenar Por</label>
            <select
              onChange={(e) => {
                handleFilterChange("orderBy", e.target.value, e.target.selectedOptions[0].dataset.direction);
              }}
              className={' rounded-lg border-2 border-gray-300 p-2'}
            >
              {orderByOptions.map((option) => (
                <option
                  key={option.label}
                  value={option.value}
                  data-direction={option.orderDirection}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary)]"></div>
            <span className="ml-3 text-gray-600">
              Carregando comunidades...
            </span>
          </div>
        )}

        {/* Grid de comunidades */}
        {!isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {communities.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
              />
            ))}

            {communities.length === 0 && !isLoading && (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-gray-500">
                  {searchParams.get("search") || ""
                    ? "Nenhuma comunidade encontrada para esta busca."
                    : "Nenhuma comunidade disponível."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <CreateComunity
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCommunityCreated={() => {
          toast.success("Comunidade criada com sucesso!")
        }}
      />
      <Footer />
    </div>
  );
};

export default Communities;
