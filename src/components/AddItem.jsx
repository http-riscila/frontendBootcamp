import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { useRef } from 'react';


const CreateListingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: ''
  });

  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUploadClick = () => {
  if (fileInputRef.current) {
    fileInputRef.current.click();
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
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src="src/assets/icons/plus.svg" className="w-8 h-8 text-[#1B5FFF]" />
            <h2 className="text-xl font-semibold text-[#111827]">Criar anúncio</h2>
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

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Nome do item
            </label>
            <input
              type="text"
              placeholder="Nome do item"
              value={formData.itemName}
              onChange={(e) => handleInputChange('itemName', e.target.value)}
              className="w-full px-4 py-3 border-1 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Categoria
            </label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border-1 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white text-[#111827] text-sm"
              >
                <option value="" >Selecione a categoria</option>
                <option value="roupas">Roupas</option>
                <option value="sapatos">Sapatos</option>
                <option value="acessorios">Acessórios</option>
                <option value="bolsas">Bolsas</option>
                <option value="joias">Joias</option>
              </select>
              <img src="src/assets/icons/chevron-down.svg" className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500 pointer-events-none" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Descrição
            </label>
            <textarea
              placeholder="Descreva o item, seu estado de conservação e outras informações importantes"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows="5"
              className="w-full px-4 py-3 border-1 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Imagem
            </label>

            <div 
              className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onClick={handleUploadClick}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center">
                  <img src="src/assets/icons/image.svg" className="w-18 h-18 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Adicionar imagem</p>
                  <p className="text-sm text-gray-500">Clique ou arraste a imagem aqui</p>
                </div>
              </div>
            </div>

            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={(e) => console.log("Imagem selecionada:", e.target.files[0])} 
              className="hidden" 
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
              Publicar
            </button>
          </div>
        </div>
      </div> 
    </div>  
  );
};

export default CreateListingModal;