import React, { useState } from 'react';
import { X, Eye, Clock, Star } from 'lucide-react';

const ProductModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button 
          onClick={openModal}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Abrir Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Detalhes do anúncio</h2>
          <button 
            onClick={closeModal}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="flex">
          {/* Left Column - Images */}
          <div className="w-1/2 p-6">
            {/* Main Image */}
            <div className="relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop&crop=center"
                alt="Vestido floral longo"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-500">
                <img 
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=100&h=100&fit=crop&crop=center"
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop&crop=center"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&h=100&fit=crop&crop=center"
                  alt="Thumbnail 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-1/2 p-6 border-l border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Vestido floral longo</h3>
          
          {/* Stats */}
          <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>40 visualizações</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Há 3 sem atrás</span>
            </div>
          </div>

          {/* Category Tag */}
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Roupas
          </span>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Descrição</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Comunidade para troca de roupas, sapatos e acessórios em todo Brasil
            </p>
          </div>

          {/* Item Condition */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Estado do item</h4>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
              Excelente estado
            </span>
          </div>

          {/* Owner Information */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Informações do proprietário</h4>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                  alt="Roberta Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Roberta Silva</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">4.6 avaliação</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-3 text-sm text-gray-600">
              <span>Membro desde: <strong>Janeiro 2024</strong></span>
              <span>Trocas realizadas: <strong>12</strong></span>
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-orange-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Como funciona a troca</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Proponha um item seu em troca</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">O proprietário avaliará sua proposta</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Combinem local e horário para a troca</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">Realizem a troca presencialmente</p>
              </div>
            </div>
          </div>

            {/* Action Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
              Propor Troca
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;