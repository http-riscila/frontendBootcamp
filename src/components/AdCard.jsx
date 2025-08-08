import profilePic from "../assets/icons/profile-pic.svg";

export default function AdCard({ ad, onViewDetails }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Imagem do produto */}
      <div className="h-48 w-full bg-gray-100">
        {ad?.imageUrl ? (
          <img 
            src={ad.imageUrl} 
            alt={ad.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Sem imagem</span>
          </div>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {ad?.name || "Item sem nome"}
        </h3>

        {/* Status "Usado" */}
        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded mb-2">
          Usado
        </span>

        {/* Descrição */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {ad?.description || "Sem descrição disponível"}
        </p>

        {/* Informações do usuário */}
        <div className="flex items-center mb-4">
          <img
            src={ad?.creator?.profileImageUrl || profilePic}
            alt={ad?.creator?.name || "Usuario"}
            className="h-6 w-6 rounded-full mr-2"
          />
          <span className="text-sm text-gray-700">
            {ad?.creator?.name || "Usuario"}
          </span>
          <span className="text-xs text-gray-500 ml-1">
            • {ad?.createdAt ? new Date(ad.createdAt).toLocaleDateString('pt-BR') : 'Data não disponível'}
          </span>
        </div>

        {/* Botão Ver detalhes */}
        <button
          onClick={() => onViewDetails && onViewDetails(ad)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
}
