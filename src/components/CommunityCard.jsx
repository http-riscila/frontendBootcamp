import React, { useState } from "react";
import ProductModal from "./ProductModal";

export default function CommunityCard({
  image,
  title,
  description,
  category,
  membersCount,
  onClick,
  // Props de anúncio (mantidas para compatibilidade)
  status,
  user,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Se for card de comunidade (category e membersCount presentes)
  const isCommunity = category && typeof membersCount === "number";

  const handleCardClick = () => {
    if (isCommunity) {
      onClick && onClick();
    } else {
      // Para cards de produto, abrir modal
      setIsModalOpen(true);
    }
  };

  const productData = {
    image,
    title,
    description,
    category: status || "Roupas",
    user,
  };

  if (isCommunity) {
    return (
      <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1B5FFF] bg-white shadow-sm">
        {/* Imagem da comunidade */}
        <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-gray-200">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-gray-400">&nbsp;</span>
          )}
        </div>
        {/* Conteúdo do card */}
        <div className="flex flex-1 flex-col p-6">
          <h5 className="mb-1 text-xl font-bold text-gray-900">{title}</h5>
          <p className="mb-6 flex-1 text-base text-gray-600">{description}</p>
          <button
            className={`w-full rounded-2xl border-0 bg-[#1B5FFF] py-3 text-xl font-semibold text-white transition-colors hover:bg-blue-700`}
            onClick={onClick}
          >
            Acessar
          </button>
        </div>
      </div>
    );
  }

  // Layout de anúncio (mantido para compatibilidade)
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
      {/* Imagem do produto */}
      <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-gray-400">Sem imagem</span>
        )}
      </div>
      {/* Conteúdo do card */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tag de status */}
        {status && (
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {status}
          </span>
        )}
        {/* Título */}
        <h5 className="mb-1 text-lg font-bold text-gray-900">{title}</h5>
        {/* Descrição */}
        <p className="mb-4 flex-1 text-sm text-gray-600">{description}</p>
        {/* Usuário e avaliação */}
        {user && (
          <div className="mb-4 flex items-center gap-2">
            {user.avatar && (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-7 w-7 rounded-full border object-cover"
              />
            )}
            <div className="flex flex-col">
              <span className="text-xs leading-none font-medium text-gray-800">
                {user.name}
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="mr-1 text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
                {user.rating}
              </span>
            </div>
          </div>
        )}
        {/* Botão */}
        <button
          className="w-full cursor-pointer rounded-lg bg-[var(--color-primary)] py-2 text-sm font-medium text-white transition-colors duration-700 hover:bg-[var(--color-tertiary)]"
          onClick={handleCardClick}
        >
          Acessar
        </button>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={productData}
      />
    </div>
  );
}
