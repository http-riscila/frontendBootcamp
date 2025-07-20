import HiUserIcon from "./hi-user-icon";

type CommunityCardProps = {
  imageUrl?: string;
  categoryLabel?: string;
  categoryColor?: "light" | "blue" | "green" | "red" | "yellow" | "purple";
  title: string;
  description: string;
  membersLabel?: string;
  membersCount?: number;
  buttonLabel?: string;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
};

export default function CommunityCard({
  imageUrl,
  categoryLabel = "Categoria",
  categoryColor = "light",
  title,
  description,
  membersLabel = "membros",
  membersCount,
  buttonLabel = "Acessar",
  onClick,
  className = "",
  isSelected = false,
}: CommunityCardProps) {
  return (
    <div
      className={`max-w-medium h-[500px] overflow-hidden rounded-2xl shadow-sm  bg-background flex flex-col ${className}`}
    >
      {/* Imagem */}
      <div className="h-[220px] w-full bg-gray-200 flex items-center justify-center rounded-t-2xl">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover rounded-md"
          />
        ) : (
          <span className="text-gray-400 text-sm">Imagem da comunidade</span>
        )}
      </div>

      <div className="border border-x-[#1b5fff] border-t-0 border-b-[#1b5fff] mt-0 py-8 pb-10 rounded-b-2xl">
        {/* Badge e membros */}
        <div className="flex justify-between items-start mb-2 px-10">
          <span className="flex justify-center items-center bg-[#d1dfff] text-[#1b5fff] border border-blue-100 w-full max-w-[68px] text-sm px-2 py-1 rounded-3xl">
            {categoryLabel}
          </span>
          {membersCount !== undefined && (
            <div className="flex text-[#79767d] text-sm gap-1 ">
              <HiUserIcon />
              {membersCount.toLocaleString()} {membersLabel}
            </div>
          )}
        </div>
        {/* Título e descrição */}
        <div className="flex flex-col items-start px-10">
          <h5 className="text-3xl font-bold text-title mt-2">{title}</h5>
          <p className="w-full max-w-[310px] text-xl text-[#79767d] mt-1 mb-4 flex-1">
            {description}
          </p>
          {/* Botão limpo */}
          <button
            className={`mt-3 w-full py-3 px-4 text-xl font-semibold rounded-lg transition-all duration-100 cursor-pointer ${
              isSelected
                ? "bg-[#1b5fff] text-white hover:opacity-90"
                : "bg-background text-[#1b5fff] border border-[#7623d7] hover:bg-[#d1dfff]"
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
