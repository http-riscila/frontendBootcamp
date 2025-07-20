import IconProfiles from "../components/icon-profiles";
import LupSearch from "../components/lup-search";

const SectionTwoHome = () => {
  return (
    <section className="container mx-auto flex max-w-[1160px] flex-col gap-5 rounded-[36px] border border-blue-600 px-12 pt-10 pb-12">
      <div className="flex items-center gap-2">
        <IconProfiles />
        <h2 className="text-[32px] text-[#1b5fff]">
          Encontre a sua comunidade
        </h2>
        <p className="ml-10 text-xl text-[#79767d]">
          Pelo o que tem interesse em trocar?
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex h-[68px] w-full max-w-[367px] justify-center rounded-2xl border border-[#1b5fff] px-10">
          <select
            name="category"
            id="#category"
            className="cursor-pointer items-center gap-20 pr-18 text-lg text-blue-600 outline-0"
          >
            <option value="#">Selecione a categoria</option>
            <option value="#">roupas</option>
            <option value="#">cultura</option>
            <option value="#">casa</option>
          </select>
        </div>
        <div>
          <form action="#" className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Pesquisar Comunidade"
              className="h-[68px] w-full max-w-[675px] rounded-2xl bg-[#F7F2FA] px-10 py-5 pr-[457px] text-lg text-[#938F96] outline-none"
            />
            <button
              type="submit"
              className="flex h-[68px] w-full max-w-[68px] cursor-pointer items-center justify-center rounded-2xl bg-blue-600 text-white"
            >
              <LupSearch />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoHome;
