import React, { useState } from 'react';

const CreateAdModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4v12M4 10h12" stroke="#1B5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Criar anúncio</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-5">
          {/* Nome do Item */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome do item
            </label>
            <input
              type="text"
              placeholder="Nome do item"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 text-sm"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white text-blue-500 text-sm">
                <option value="">Selecione a categoria</option>
                <option value="roupas">Roupas e Acessórios</option>
                <option value="calçados">Calçados</option>
                <option value="livros">Livros e Materiais</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="casa">Casa e Decoração</option>
                <option value="esportes">Esportes e Lazer</option>
                <option value="geral">Geral</option>
              </select>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              placeholder="Descreva o item, seu estado de conservação e outras informações importantes"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400 resize-none text-sm"
            />
          </div>

          {/* Imagem */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagem
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F3F4F6"/>
                    <path d="M20 14v12M14 20h12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-600 mb-1 text-sm">Adicionar imagem</p>
                  <p className="text-xs text-gray-500">Clique ou arraste a imagem aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Cancelar
            </button>
            <button 
              onClick={() => {
                // Aqui você pode adicionar a lógica de criação do anúncio
                console.log('Anúncio criado!');
                onClose();
              }}
              className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdModal;