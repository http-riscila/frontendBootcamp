import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { countAcceptedProposals } from "../services/proposal-service";
import { countAvailableItems } from "../services/item-service";
import { countCreatedCommunities } from "../services/community-service";
import Breadcrumb from "../components/Breadcrumb";
import photoBg from "../assets/images/profile-img-bg.png";
import profilePic from "../assets/icons/profile-pic.svg";
import editIcon from "../assets/icons/edit-icon.png";

export default function UserDetails() {
  const [tradeCount, setTradeCount] = useState(0);
  const [activeAdCount, setActiveAdCount] = useState(0);
  const [communityCount, setCommunityCount] = useState(0);

  const [activeTab, setActiveTab] = useState("");

  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) return;

    async function fetchCounts() {
      try {
        const [trades, items, communities] = await Promise.all([
          countAcceptedProposals(user.id),
          countAvailableItems(user.id),
          countCreatedCommunities(user.id),
        ]);

        setTradeCount(trades);
        setActiveAdCount(items);
        setCommunityCount(communities);
      } catch (error) {
        console.log("Error fetching count data", error);
      }
    }
    fetchCounts();
  }, [user]);

  console.log(user);

  return (
    <div className=" flex flex-col gap-16 min-h-screen w-full bg-[var(--color-background)] font-inter px-26">
      <div className="flex flex-col gap-6 mt-5">
        <Breadcrumb />
        <div className="flex flex-row gap-8">
          <div className="flex flex-row items-center gap-4">
            <span className="relative w-[133px] h-[133px]">
              {user?.profilePic && (
                <img
                  src={photoBg}
                  className="absolute top-0 left-0 w-full h-full"
                />
              )}
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
                Membro desde{" "}
                {new Date(user?.createdAt).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </div>
          <div className=" w-px mx-8 h-[142px] bg-[#E5E7EB]"></div>
          <div className="flex flex-col flex-1 gap-4 justify-center">
            {user?.bio && (
              <p className="text-[16px] text-[var(--color-text)]">{user.bio}</p>
            )}
            <ul className="flex flex-row justify-between font-bricolage font-medium text-[18px] text-[var(--color-title)]">
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  {tradeCount ?? 0}
                </span>{" "}
                Trocas realizadas
              </li>
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  {activeAdCount ?? 0}
                </span>{" "}
                Anúncios ativos
              </li>
              <li className="flex flex-row items-center gap-1">
                <span className="text-[36px] text-[var(--color-primary)]">
                  {communityCount ?? 0}
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
            <li
              className={`py-1 px-4 rounded-xl transition-all duration-500 ease-in-out ${
                activeTab === "my-communities"
                  ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  : "text-[var(--color-title)]"
              } hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer`}
            >
              <button
                onClick={(e) => setActiveTab(e.currentTarget.id)}
                id="my-communities"
                className="cursor-pointer"
              >
                Minhas comunidades
              </button>
            </li>
            <li
              className={`py-1 px-4 rounded-xl transition-all duration-500 ease-in-out ${
                activeTab === "my-ads"
                  ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  : "text-[var(--color-title)]"
              } hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer`}
            >
              <button
                onClick={(e) => setActiveTab(e.currentTarget.id)}
                id="my-ads"
                className="cursor-pointer"
              >
                Meus anúncios
              </button>
            </li>
            <li
              className={`py-1 px-4 rounded-xl transition-all duration-500 ease-in-out ${
                activeTab === "received-proposals"
                  ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  : "text-[var(--color-title)]"
              } hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer`}
            >
              <button
                onClick={(e) => setActiveTab(e.currentTarget.id)}
                id="received-proposals"
                className="cursor-pointer"
              >
                Propostas recebidas
              </button>
            </li>
            <li
              className={`py-1 px-4 rounded-xl transition-all duration-500 ease-in-out ${
                activeTab === "sent-proposals"
                  ? "bg-[var(--color-tertiary)] text-[var(--color-primary)]"
                  : "text-[var(--color-title)]"
              } hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)] cursor-pointer`}
            >
              <button
                onClick={(e) => setActiveTab(e.currentTarget.id)}
                id="sent-proposals"
                className="cursor-pointer"
              >
                Propostas enviadas
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
