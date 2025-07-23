import React, { useState, useRef } from 'react';
import { Button } from "flowbite-react";

const CreateListingModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    communityName: '',
    category: '',
    description: '',
    location: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose(); // Fechar modal após submissão
  };

  return (
    <div className="fixed inset-0 bg-[#111827] bg-opacity-25 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src="src/assets/icons/plus.svg" className="w-8 h-8 text-[#1B5FFF]" />
            <h2 className="text-xl font-semibold text-gray-900">Criar comunidade</h2>
          </div>
          <Button 
                      onClick={onClose}
                      className="!bg-white hover:!bg-gray-100 px-1 py-1 cursor-pointer rounded-xl border"
                    >
                      <svg width="42" height="42" viewBox="0 0 46 46" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.6569 17.3431L17.3431 28.6569M28.6569 28.6569L17.3431 17.3431" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
          
                    </Button>
        </div>

        {/* Image Upload - First */}
        <div className="p-6 pb-0">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Foto da comunidade
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div 
              onClick={handleImageClick}
              className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
            >
              {selectedImage ? (
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Preview" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600">Clique para alterar a imagem</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center">
                    <img src="src/assets/icons/image.svg" className="w-18 h-18 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Adicionar foto de capa</p>
                    <p className="text-sm text-gray-500">Clique ou arraste a imagem aqui</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 pt-4 space-y-6">
          {/* Community Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nome da comunidade
            </label>
            <input
              type="text"
              placeholder="Ex: Trocas de Roupas São Paulo"
              value={formData.communityName}
              onChange={(e) => handleInputChange('communityName', e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Tipo de comunidade
            </label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white text-[#111827] text-sm"
              >
                <option value="">Selecione o tipo</option>
                <option value="roupas">Roupas e Acessórios</option>
                <option value="calçados">Calçados</option>
                <option value="livros">Livros e Materiais</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="casa">Casa e Decoração</option>
                <option value="esportes">Esportes e Lazer</option>
                <option value="geral">Geral</option>
              </select>
              <img src="src/assets/icons/chevron-down.svg" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1B5FFF] pointer-events-none" />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Localização
            </label>
            <input
              type="text"
              placeholder="Ex: São Paulo, SP"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Descrição da comunidade
            </label>
            <textarea
              placeholder="Descreva o objetivo da comunidade, regras de troca e outras informações importantes para os membros"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows="5"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-[#FE7A1B] text-[#FE7A1B] font-medium rounded-xl transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-[#1B5FFF] hover:bg-blue-700 text-white font-medium rounded-xl transition-colors cursor-pointer"
            >
              Criar Comunidade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListingModal;