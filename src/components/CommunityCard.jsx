import memberIcon from "../assets/icons/member-icon.svg";
export default function CommunityCard({ community }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1B5FFF] bg-white shadow-sm">
      {/* Imagem da comunidade */}
      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-gray-200">
        {community?.imageUrl ? (
          <img
            src={community?.imageUrl}
            alt="Imagem da comunidade"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-400">&nbsp;</span>
        )}
      </div>
      {/* Conteúdo do card */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-row justify-end gap-2 text-xs text-[var(--color-text)]">
          <img src={memberIcon || 0} />
          <span className="flex flex-row gap-1">
            membersCount <p>membros</p>
          </span>
        </div>
        <div>
          <h5 className="text-xl font-bold text-gray-900">{community?.name}</h5>

          <p className="flex-1 text-base text-gray-600">
            {community?.description}
          </p>
        </div>
        <button
          className={`w-full cursor-pointer rounded-2xl border-0 bg-[var(--color-primary)] py-3 text-xl font-medium text-white transition-colors duration-700 hover:bg-[var(--color-tertiary)]`}
        >
          Acessar
        </button>
      </div>
    </div>
  );
}
