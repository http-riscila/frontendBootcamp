export default function CommunityCard({
  imageUrl,
  title,
  description,
  membersLabel = "membros",
  membersCount,
  buttonLabel = "Acessar",
  onClick,
  isSelected = false,
}) {
  return (
    <div className="bg-background mx-auto flex h-auto w-full max-w-xs flex-col sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex h-[180px] w-full items-center justify-center rounded-t-2xl bg-gray-200 sm:h-[200px] md:h-[220px] lg:h-[240px]">
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

      <div className="mt-0 rounded-b-2xl border border-t-0 border-x-[#1b5fff] border-b-[#1b5fff] py-4 pb-6 sm:py-6 sm:pb-8 md:py-8 md:pb-10">
        <div className="mb-2 flex items-start justify-between px-4 sm:px-6 md:px-8 lg:px-10">
          {membersCount !== undefined && (
            <div className="flex gap-1 text-sm text-[#79767d]">
              <img src="src/assets/svgs/user-icon.svg" alt="user" />
              {membersCount.toLocaleString()} {membersLabel}
            </div>
          )}
        </div>

        <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10">
          <h5 className="text-title mt-2 text-xl font-bold sm:text-2xl md:text-3xl">
            {title}
          </h5>
          <p className="mt-1 mb-3 w-full max-w-[280px] flex-1 text-base text-[#79767d] sm:mb-4 sm:max-w-[310px] sm:text-lg md:text-xl">
            {description}
          </p>

          <button
            className={`mt-2 w-full cursor-pointer rounded-lg border px-3 py-2 text-base font-semibold transition-all duration-100 sm:mt-3 sm:px-4 sm:py-3 sm:text-lg md:text-xl ${
              isSelected
                ? "border-white bg-[#1b5fff] text-white hover:opacity-90"
                : "bg-background border-[#7623d7] text-[#1b5fff] hover:bg-[#d1dfff]"
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
