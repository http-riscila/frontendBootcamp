import React from "react";
import IconProfiles from "../components/icon-profiles";
import { Button } from "flowbite-react";
import LupSearch from "../components/lup-search";

const SectionTwoHome = () => {
  return (
    <section className="flex flex-col gap-5 px-12 pt-10 pb-12 mt-12 mb-20 mx-auto max-w-[1240px] border border-blue-600 rounded-[36px]">
      <div className="flex items-center gap-2">
        <IconProfiles />
        <h2 className="text-blue-600 text-3xl">Encontre a sua comunidade</h2>
        <p className="text-gray-400 ml-10">
          Pelo o que tem interesse em trocar?
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex justify-center border border-blue-600 rounded-2xl px-10 h-[68px]">
          <select
            name="category"
            id="#category"
            className=" text-lg text-blue-600 pr-18 outline-0 items-center gap-20 cursor-pointer"
          >
            <option value="#">Selecione a categoria</option>
            <option value="#">Tecnologia</option>
            <option value="#">Eletrodomésticos</option>
            <option value="#">Móveis</option>
          </select>
        </div>
        <div>
          <form action="#" className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Pesquisar Comunidade"
              className="bg-[#F7F2FA] rounded-2xl px-10 py-5 pr-96 text-lg text-[#938F96] outline-none w-[675px] h-[68px] max-w-[675px]"
            />
            <Button
              type="submit"
              className="bg-blue-600 text-white w-[68px] h-[68px] rounded-2xl p-"
            >
              <LupSearch />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoHome;
