import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import profilePic from "../assets/icons/profile-pic.svg";

export default function AdCard({ ad }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Modal aberto:", isModalOpen);
  }, [isModalOpen]);
  return (
    <div className="h-[598px] max-w-[295px]">
      <div className="flex flex-col items-center">
        <div className="h-64 max-h-[598px] w-74 rounded-t-xl bg-gray-200">
          <img src={ad?.imageUrl} />
        </div>
        <div className="flex flex-col items-center gap-4 rounded-b-xl border border-t-0 border-x-[var(--color-primary)] border-b-[var(--color-primary)]">
          <div className="mt-5 flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium text-[var(--color-title)]">
                {ad?.name}Vestido floral longo
              </span>
              <span className="flex h-6 w-14 items-center justify-center rounded-lg bg-[var(--color-tertiary)] text-xs text-[var(--color-primary)]">
                Roupas
              </span>
              {ad?.category}
              <p className="text-base text-[var(--color-text)]">
                {ad?.description}Comunidade para troca de roupas, sapatos e
                acessórios em todo Brasil Comunidade para.
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src={ad?.createdBy.imageUrl || profilePic}
                className="h-9 w-9"
              />
              <span className="text-sm font-medium text-[var(--color-title)]">
                {ad?.createdBy}Usuario
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                console.log("Cliquei no botão");
                setIsModalOpen(true);
                console.log(isModalOpen);
              }}
              className="mb-5 h-14 w-56 cursor-pointer rounded-xl bg-[var(--color-primary)] text-lg font-medium text-white transition-all duration-700 hover:bg-[var(--color-tertiary)]"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ad={ad}
      />
    </div>
  );
}
