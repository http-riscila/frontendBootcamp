const CreateAdModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="#1B5FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">
              Criar anúncio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
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
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="space-y-5 p-6">
          {/* Nome do Item */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nome do item
            </label>
            <input
              type="text"
              placeholder="Nome do item"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Categoria
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-blue-500 transition-colors focus:border-blue-500 focus:outline-none">
                <option value="">Selecione a categoria</option>
                <option value="roupas">Roupas e Acessórios</option>
                <option value="calçados">Calçados</option>
                <option value="livros">Livros e Materiais</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="casa">Casa e Decoração</option>
                <option value="esportes">Esportes e Lazer</option>
                <option value="geral">Geral</option>
              </select>
              <svg
                className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              placeholder="Descreva o item, seu estado de conservação e outras informações importantes"
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Imagem */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Imagem
            </label>
            <div className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center transition-colors hover:border-gray-400">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F3F4F6" />
                    <path
                      d="M20 14v12M14 20h12"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-gray-600">
                    Adicionar imagem
                  </p>
                  <p className="text-xs text-gray-500">
                    Clique ou arraste a imagem aqui
                  </p>
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
              className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                // Aqui você pode adicionar a lógica de criação do anúncio
                console.log("Anúncio criado!");
                onClose();
              }}
              className="flex-1 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
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
