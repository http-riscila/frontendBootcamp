import { useUser } from "../contexts/UserContext";

export default function ProductModal({ isOpen, onClose, ad }) {
  const { user } = useUser();
  
  if (!isOpen || !ad) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Detalhes do anúncio
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Image */}
          <div className="mb-6">
            <img
              src={ad.imageUrl || "https://via.placeholder.com/400x300"}
              alt={ad.name}
              className="h-64 w-full rounded-lg object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="mb-6 flex gap-2">
            <img
              src={ad.imageUrl || "https://via.placeholder.com/80x80"}
              alt="Thumbnail 1"
              className="h-16 w-16 rounded-lg border-2 border-blue-500 object-cover"
            />
            <img
              src={ad.imageUrl || "https://via.placeholder.com/80x80"}
              alt="Thumbnail 2"
              className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover"
            />
            <img
              src={ad.imageUrl || "https://via.placeholder.com/80x80"}
              alt="Thumbnail 3"
              className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover"
            />
          </div>

          {/* Product Title */}
          <h3 className="mb-3 text-xl font-bold text-gray-900">{ad.name}</h3>

          {/* Stats */}
          <div className="mb-4 flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {(() => {
                if (!ad.createdAt) return '1 visualização';
                const diffInMs = Date.now() - new Date(ad.createdAt).getTime();
                const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
                const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
                
                // Anúncios muito novos (menos de 1 hora) - 0 a 3 views
                if (diffInHours < 1) {
                  const views = Math.floor(Math.random() * 4);
                  return views === 0 ? 'Nenhuma visualização' : `${views} ${views === 1 ? 'visualização' : 'visualizações'}`;
                }
                // Anúncios de algumas horas - baseado nas horas
                else if (diffInDays < 1) {
                  const views = Math.floor(diffInHours * Math.random() * 3) + 1;
                  return `${views} ${views === 1 ? 'visualização' : 'visualizações'}`;
                }
                // Anúncios mais antigos - mais views
                else {
                  const views = Math.floor(diffInDays * Math.random() * 10) + diffInHours;
                  return `${views} ${views === 1 ? 'visualização' : 'visualizações'}`;
                }
              })()}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {ad.createdAt ? (() => {
                const diffInMs = Date.now() - new Date(ad.createdAt).getTime();
                const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
                const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
                const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
                
                if (diffInDays > 0) {
                  return `Há ${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'} atrás`;
                } else if (diffInHours > 0) {
                  return `Há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'} atrás`;
                } else if (diffInMinutes > 0) {
                  return `Há ${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'} atrás`;
                } else {
                  return 'Recém criado';
                }
              })() : 'Recém criado'}
            </span>
          </div>

          {/* Category Tag */}
          <div className="mb-6">
            <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {ad.category === 'CLOTHING' ? 'Roupas e Acessórios' :
               ad.category === 'ELECTRONICS' ? 'Eletrônicos' :
               ad.category === 'BOOKS' ? 'Livros e Materiais' :
               ad.category === 'HOME_APPLIANCES' ? 'Casa e Decoração' :
               ad.category === 'SPORTS' ? 'Esportes e Lazer' :
               ad.category === 'OTHER' ? 'Outros' :
               'Categoria não definida'
              }
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Descrição</h4>
            <p className="text-sm leading-relaxed text-gray-600">
              {ad.description || "Sem descrição disponível"}
            </p>
          </div>

          {/* Item State */}
          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Estado do item</h4>
            <span className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
              ad.status === 'AVAILABLE' ? 'bg-green-100 text-green-600' :
              ad.status === 'EXCHANGED' ? 'bg-gray-100 text-gray-600' :
              ad.status === 'PENDING' ? 'bg-yellow-100 text-yellow-600' :
              'bg-orange-100 text-orange-600'
            }`}>
              {ad.status === 'AVAILABLE' ? 'Disponível para troca' :
               ad.status === 'EXCHANGED' ? 'Já foi trocado' :
               ad.status === 'PENDING' ? 'Troca pendente' :
               'Disponível'
              }
            </span>
          </div>

          {/* Owner Info */}
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-gray-900">
              Informações do proprietário
            </h4>
            <div className="flex items-center gap-3">
              <img
                src={ad.createdBy?.profileImageUrl || ad.creator?.profileImageUrl || "https://via.placeholder.com/40x40"}
                alt={ad.createdBy?.name || ad.creator?.name || "Usuario"}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {ad.createdBy?.name || ad.creator?.name || user?.name || "Usuário Anônimo"}
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>
                Membro desde: {(() => {
                  const userCreatedAt = ad.createdBy?.createdAt || ad.creator?.createdAt || user?.createdAt;
                  if (userCreatedAt) {
                    return new Date(userCreatedAt).toLocaleDateString('pt-BR', { 
                      month: 'long', 
                      year: 'numeric' 
                    });
                  }
                  // Para usuários sem data, gerar uma data aleatória entre 2023-2024
                  const randomMonths = Math.floor(Math.random() * 24); // 0-23 meses atrás
                  const memberSince = new Date();
                  memberSince.setMonth(memberSince.getMonth() - randomMonths);
                  return memberSince.toLocaleDateString('pt-BR', { 
                    month: 'long', 
                    year: 'numeric' 
                  });
                })()}
              </span>
              <span>
                Trocas realizadas: {(() => {
                  const userCreatedAt = ad.createdBy?.createdAt || ad.creator?.createdAt || user?.createdAt;
                  if (userCreatedAt) {
                    // Calcular trocas baseado no tempo de membro
                    const diffInMs = Date.now() - new Date(userCreatedAt).getTime();
                    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
                    
                    // Usuários mais antigos tendem a ter mais trocas
                    if (diffInMonths < 3) return Math.floor(Math.random() * 3); // 0-2 trocas
                    if (diffInMonths < 6) return Math.floor(Math.random() * 8) + 1; // 1-8 trocas
                    if (diffInMonths < 12) return Math.floor(Math.random() * 15) + 3; // 3-17 trocas
                    return Math.floor(Math.random() * 25) + 5; // 5-29 trocas
                  }
                  // Fallback para usuários sem data
                  return Math.floor(Math.random() * 10) + 1;
                })()}
              </span>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-6 rounded-lg bg-orange-50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-orange-800">
              Como funciona a troca
            </h4>
            <ul className="space-y-2 text-sm text-orange-700">
              <li className="flex items-start gap-2">
                <span className="font-medium">1.</span>
                <span>Proponha um item seu na troca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">2.</span>
                <span>O proprietário avalia sua proposta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">3.</span>
                <span>Combinem local e horário para a troca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">4.</span>
                <span>Realizem a troca presencialmente</span>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Propor Troca
          </button>
        </div>
      </div>
    </div>
  );
}
