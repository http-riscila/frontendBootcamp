import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/icons/profile-pic.svg";

export default function UserPopover({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <Popover className="relative">
      <Popover.Button className="cursor-pointer focus:outline-none">
        <img
          src={user?.profileImageUrl || profilePic}
          alt="Foto do usuário"
          className="h-8 w-8 rounded-full object-cover"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 rounded-md border bg-white shadow-lg">
          <div className="flex flex-col p-2 text-sm">
            <button
              onClick={() => navigate("/perfil")}
              className="cursor-pointer rounded px-3 py-2 text-left hover:bg-gray-100"
            >
              Meu Perfil
            </button>
            <button
              onClick={onLogout}
              className="mt-1 cursor-pointer rounded px-3 py-2 text-left text-[var(--color-secondary)] hover:bg-gray-100"
            >
              Sair
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
