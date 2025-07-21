

export default function CommunityCard({
  imageUrl,
  categoryLabel = "Categoria",
  title,
  description,
  membersLabel = "membros",
  membersCount,
  buttonLabel = "Acessar",
  onClick,
  className = "",
  isSelected = false,
}) {
  return (
    <div
      className={`max-w-medium bg-background flex h-[500px] flex-col overflow-hidden rounded-2xl shadow-sm ${className}`}
    >
      {/* Imagem */}
      <div className="flex h-[220px] w-full items-center justify-center rounded-t-2xl bg-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <span className="text-sm text-gray-400">Imagem da comunidade</span>
        )}
      </div>

      <div className="mt-0 rounded-b-2xl border border-t-0 border-x-[#1b5fff] border-b-[#1b5fff] py-8 pb-10">
       
        <div className="mb-2 flex items-start justify-between px-10">
          <span className="flex w-full max-w-[68px] items-center justify-center rounded-3xl border border-blue-100 bg-[#d1dfff] px-2 py-1 text-sm text-[#1b5fff]">
            {categoryLabel}
          </span>
          {membersCount !== undefined && (
            <div className="flex gap-1 text-sm text-[#79767d]">
              <img src="src/assets/svgs/user-icon.svg" alt="user" />
              {membersCount.toLocaleString()} {membersLabel}
            </div>
          )}
        </div>
      
        <div className="flex flex-col items-start px-10">
          <h5 className="text-title mt-2 text-3xl font-bold">{title}</h5>
          <p className="mt-1 mb-4 w-full max-w-[310px] flex-1 text-xl text-[#79767d]">
            {description}
          </p>
          {/* Botão limpo */}
          <button
            className={`mt-3 w-full cursor-pointer rounded-lg px-4 py-3 text-xl font-semibold transition-all duration-100 ${
              isSelected
                ? "bg-[#1b5fff] text-white hover:opacity-90"
                : "bg-background border border-[#7623d7] text-[#1b5fff] hover:bg-[#d1dfff]"
            }`}
            onClick={onClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
