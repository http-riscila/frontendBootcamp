import { useState } from 'react';

export default function ProductModal({ isOpen, onClose, ad }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array de imagens (usa as imagens do produto ou fallback)
  const images = ad?.images || [
    ad?.imageUrl || "src/assets/images/104002MRE-calca-jeans-reta-araca-marrom-escuro-minimadeia-nov24-04 1.png",
    "src/assets/images/6-post-semanal-maltashoes-2022-05-20-branco-12 1.png",
    "src/assets/images/casaEdecoração.png",
    "src/assets/images/image-01-section-4-home.jpg"
  ];

  if (!isOpen || !ad) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={onClose}
    >
      <div 
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Detalhes do anúncio
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-gray-600 hover:bg-gray-100 rounded-md p-1 cursor-pointer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={images[currentImageIndex]}
                  alt={ad?.name || "Produto"}
                  className="h-80 w-full rounded-lg object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-16 rounded-lg object-cover cursor-pointer transition-all duration-200 hover:opacity-75 ${
                      currentImageIndex === index 
                        ? "border-2 border-blue-500" 
                        : "border border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Product Title and Stats */}
              <div className="mb-4">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {ad?.name || "Vestido floral longo"}
                </h3>
                
                <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    40 visualizações
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Há 3 sem atrás
                  </span>
                </div>

                {/* Category Tag */}
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Roupas
                </span>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Descrição</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {ad?.description ||
                    "Comunidade para troca de roupas, sapatos e acessórios em todo Brasil"}
                </p>
              </div>

              {/* Item State */}
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-semibold text-gray-900">Estado do item</h4>
                <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
                  Excelente estado
                </span>
              </div>

              {/* Owner Info */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-900">
                  Informações do proprietário
                </h4>
                <div className="flex items-center gap-3">
                  <img
                    src={ad?.createdBy?.profileImageUrl || "src/assets/icons/profile-pic.svg"}
                    alt={ad?.createdBy?.name || "Roberta Silva"}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {ad?.createdBy?.name || "Roberta Silva"}
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-500">4,5 avaliação</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-4 text-xs text-gray-500">
                  <span>Membro desde: <strong>Janeiro 2024</strong></span>
                  <span>Trocas realizadas: <strong>12</strong></span>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-6 rounded-lg bg-orange-50 p-4">
                <h4 className="mb-3 font-medium text-orange-800">
                  Como funciona a troca
                </h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">▶</span>
                    Proponha um item seu em troca
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">▶</span>
                    O proprietário avaliará sua proposta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">▶</span>
                    Combinem local e horário para a troca
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">▶</span>
                    Realizem a troca presencialmente
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                Propor Troca
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
