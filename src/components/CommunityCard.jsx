import React, { useState } from 'react';
import ProductModal from './ProductModal';

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
  const isCommunity = category && typeof membersCount === 'number';

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
    category: status || 'Roupas',
    user
  };

  if (isCommunity) {
    return (
      <div className="bg-white rounded-2xl border border-[#1B5FFF] flex flex-col overflow-hidden shadow-sm">
        {/* Imagem da comunidade */}
        <div className="h-40 w-full flex items-center justify-center bg-gray-200 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <span className="text-sm text-gray-400">&nbsp;</span>
          )}
        </div>
        {/* Conteúdo do card */}
        <div className="flex flex-col flex-1 p-6">
          <h5 className="text-xl font-bold text-gray-900 mb-1">{title}</h5>
          <p className="text-base text-gray-600 mb-6 flex-1">{description}</p>
          <button
            className={`w-full font-semibold py-3 rounded-2xl transition-colors text-xl
              bg-[#1B5FFF] text-white hover:bg-blue-700 border-0
            `}
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
    <div className="bg-white rounded-2xl border border-blue-200 flex flex-col overflow-hidden shadow-sm">
      {/* Imagem do produto */}
      <div className="h-48 w-full flex items-center justify-center bg-gray-100 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-gray-400">Sem imagem</span>
        )}
      </div>
      {/* Conteúdo do card */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tag de status */}
        {status && (
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {status}
          </span>
        )}
        {/* Título */}
        <h5 className="text-lg font-bold text-gray-900 mb-1">{title}</h5>
        {/* Descrição */}
        <p className="text-sm text-gray-600 mb-4 flex-1">
          {description}
        </p>
        {/* Usuário e avaliação */}
        {user && (
          <div className="flex items-center gap-2 mb-4">
            {user.avatar && (
              <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover border" />
            )}
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-800 leading-none">{user.name}</span>
              <span className="flex items-center text-xs text-gray-500">
                <svg width="14" height="14" fill="currentColor" className="mr-1 text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                {user.rating}
              </span>
            </div>
          </div>
        )}
        {/* Botão */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors text-sm"
          onClick={handleCardClick}
        >
          Ver detalhes
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
