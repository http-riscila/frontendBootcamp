import { useUser } from "../contexts/UserContext";
import Breadcrumb from "../components/Breadcrumb";
import photoBg from "../assets/images/profile-img-bg.png";
import profilePic from "../assets/icons/profile-pic.svg";
import editIcon from "../assets/icons/edit-icon.png";

export default function UserDetails() {
  const { user } = useUser();

  return (
    <div className=" flex flex-col gap-16 min-h-screen w-full bg-[var(--color-background)] font-inter px-26">
      <div className="flex flex-col gap-6 mt-5">
        <Breadcrumb />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-4">
            <span className="relative w-[133px] h-[133px]">
              <img
                src={photoBg}
                className="absolute top-0 left-0 w-full h-full"
              />
              <img
                src={profilePic}
                className="absolute top-0 left-0 w-full h-full"
              />
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end gap-4">
                <span className="text-[36px] leading-none font-bricolage font-medium text-[var(--color-title)]">
                  {user?.name}
                </span>
                <button className="cursor-pointer">
                  <img src={editIcon} className="w-[20px] h-[20px]" />
                </button>
              </div>
              <span className="text-[18px] text-[var(--color-text)]">
                Membro desde dezembro 2024
              </span>
            </div>
          </div>
          <div className="w-px h-[142px] bg-[#E5E7EB]"></div>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] text-[var(--color-text)]">
              Apaixonado por economia colaborativa e soluções sustentáveis.
              Criei este site para
              <br /> facilitar trocas justas e seguras entre pessoas. Acredito
              no poder da comunidade para
              <br /> gerar impacto positivo.
            </p>
            <ul className="flex flex-row justify-between font-bricolage font-medium text-[18px] text-[var(--color-title)]">
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  15
                </span>{" "}
                Trocas realizadas
              </li>
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  8
                </span>{" "}
                Anúncios ativos
              </li>
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  12
                </span>{" "}
                Comunidades criadas
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <nav>
          <ul className="flex flex-row justify-between text-[22px] text-[var(--color-title)] font-bricolage font-medium">
            <li className=" py-1 px-4 rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer">
              <button className="cursor-pointer">Minhas comunidades</button>
            </li>
            <li className=" py-1 px-4 rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer">
              <button className="cursor-pointer">Meus anúncios</button>
            </li>
            <li className=" py-1 px-4 rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer">
              <button className="cursor-pointer">Propostas recebidas</button>
            </li>
            <li className=" py-1 px-4 rounded-xl transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer">
              <button className="cursor-pointer">Propostas enviadas</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
