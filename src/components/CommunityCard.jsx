import memberIcon from "../assets/icons/member-icon.svg";
export default function CommunityCard({
  image,
  title,
  description,
  membersCount,
}) {
  return (
    <div className="] flex flex-col overflow-hidden rounded-2xl border border-[var(--color-primary)] bg-white shadow-sm">
      {/* Imagem da comunidade */}
      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-gray-200">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-gray-400">&nbsp;</span>
        )}
      </div>
      {/* Conteúdo do card */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-row justify-end gap-2 text-xs text-[var(--color-text)]">
          <img src={memberIcon || 0} />
          <span className="flex flex-row gap-1">
            {membersCount} <p>membros</p>
          </span>
        </div>
        <div className="min-h-24">
          <h5 className="text-xl font-bold text-gray-900">{title}</h5>

          <p className="flex-1 text-base text-gray-600">{description}</p>
        </div>
        <button
          className={`w-full cursor-pointer rounded-2xl border bg-[var(--color-primary)] py-3 text-xl font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[var(--color-primary)]`}
        >
          Acessar
        </button>
      </div>
    </div>
  );
}
