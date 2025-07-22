import React, { useState, useRef } from "react";
import { Button } from "flowbite-react";

const CreateListingModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    communityName: "",
    category: "",
    description: "",
    location: "",
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  if (!isOpen) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Button
          onClick={openModal}
          className="rounded-lg bg-[#1B5FFF] px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Criar Comunidade
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-opacity-25 fixed inset-0 z-50 flex items-center justify-center bg-[#111827] p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <img
              src="src/assets/icons/plus.svg"
              className="h-8 w-8 text-[#1B5FFF]"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              Criar comunidade
            </h2>
          </div>
          <Button
            onClick={closeModal}
            className="cursor-pointer rounded-xl border !bg-white px-1 py-1 hover:!bg-gray-100"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 46 46"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.6569 17.3431L17.3431 28.6569M28.6569 28.6569L17.3431 17.3431"
                stroke="#111827"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Image Upload - First */}
        <div className="p-6 pb-0">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
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
              className="cursor-pointer rounded-xl border-2 border-dashed border-blue-300 p-8 text-center transition-colors hover:border-blue-400"
            >
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="mb-3 h-32 w-full rounded-lg object-cover"
                  />
                  <p className="text-sm text-gray-600">
                    Clique para alterar a imagem
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center">
                    <img
                      src="src/assets/icons/image.svg"
                      className="h-18 w-18 text-gray-400"
                    />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-gray-900">
                      Adicionar foto de capa
                    </p>
                    <p className="text-sm text-gray-500">
                      Clique ou arraste a imagem aqui
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-6 p-6 pt-4">
          {/* Community Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Nome da comunidade
            </label>
            <input
              type="text"
              placeholder="Ex: Trocas de Roupas São Paulo"
              value={formData.communityName}
              onChange={(e) =>
                handleInputChange("communityName", e.target.value)
              }
              className="w-full rounded-xl border-2 border-blue-200 px-4 py-3 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Tipo de comunidade
            </label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full appearance-none rounded-xl border-2 border-blue-200 bg-white px-4 py-3 text-sm text-[#111827] transition-colors focus:border-blue-500 focus:outline-none"
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
              <img
                src="src/assets/icons/chevron-down.svg"
                className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-[#1B5FFF]"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Localização
            </label>
            <input
              type="text"
              placeholder="Ex: São Paulo, SP"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="w-full rounded-xl border-2 border-blue-200 px-4 py-3 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Descrição da comunidade
            </label>
            <textarea
              placeholder="Descreva o objetivo da comunidade, regras de troca e outras informações importantes para os membros"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows="5"
              className="w-full resize-none rounded-xl border-2 border-blue-200 px-4 py-3 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-100 p-6">
          <div className="flex gap-3">
            <button
              onClick={closeModal}
              className="flex-1 cursor-pointer rounded-xl border border-[#FE7A1B] px-6 py-3 font-medium text-[#FE7A1B] transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 cursor-pointer rounded-xl bg-[#1B5FFF] px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
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
