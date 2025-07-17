export default function Header() {
  return (
    <div className="w-full bg-white border-b border-[#E5E7EB]">
      <header className="max-w-[1240px] mx-auto grid grid-cols-12 items-center min-h-[100px]">
        
        <div className="col-span-3 flex items-center">
          <a href="#"><img src="/assets/logo-principal.svg" alt="Logo" className="h-[46px] w-[221px]" /></a>
        </div>
        

        <div className="col-span-9 flex justify-end items-center gap-3">
            <nav className=" flex justify-end gap-7 pr-8">
          <a href="#" className="flex items-center gap-2 text-[#1B5FFF] font-medium">
            <svg className="h-6 w-6 text-[#1B5FFF]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 18.3333V15C13.3333 13.1591 11.8409 11.6667 10 11.6667C8.15905 11.6667 6.66667 13.1591 6.66667 15V18.3333M17.5 8.45861V14.9724C17.5 16.8286 16.0076 18.3333 14.1667 18.3333H5.83333C3.99238 18.3333 2.5 16.8286 2.5 14.9724V8.45861C2.5 7.44948 2.9497 6.49375 3.72488 5.85544L7.89155 2.42446C9.11859 1.41407 10.8814 1.41407 12.1084 2.42446L16.2751 5.85544C17.0503 6.49375 17.5 7.44948 17.5 8.45861Z" stroke="#1B5FFF" stroke-width="1.5"/>
            </svg>
            Home
          </a>
            <a href="#" className="flex items-center gap-2 text-[#111827] hover:text-[#1B5FFF] group">
              <svg className="h-6 w-6 text-[#111827] group-hover:text-[#1B5FFF]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8C14 10.7614 11.7614 13 9 13C6.23858 13 4 10.7614 4 8C4 5.23858 6.23858 3 9 3C11.7614 3 14 5.23858 14 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 23V23C17 19.6863 14.3137 17 11 17H8C4.68629 17 2 19.6863 2 23V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13 4.09664C13.8428 3.41045 14.9127 3 16.0769 3C18.7959 3 21 5.23858 21 8C21 10.7614 18.7959 13 16.0769 13C14.9127 13 13.8428 12.5896 13 11.9034" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M23 23V23C23 19.6863 20.3137 17 17 17H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Comunidades
            </a>
          <a href="#" className="flex items-center gap-2 text-[#111827] hover:text-[#1B5FFF] group">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#111827] group-hover:text-[#1B5FFF]">
              <path d="M12.543 9.24072L13.1737 9.64656V9.64656L12.543 9.24072ZM8.41683 8.25C8.41683 8.66421 8.75262 9 9.16683 9C9.58104 9 9.91683 8.66421 9.91683 8.25H8.41683ZM10.2502 12.375C10.2502 12.7892 10.5859 13.125 11.0002 13.125C11.4144 13.125 11.7502 12.7892 11.7502 12.375H10.2502ZM11.7502 14.6667C11.7502 14.2525 11.4144 13.9167 11.0002 13.9167C10.5859 13.9167 10.2502 14.2525 10.2502 14.6667H11.7502ZM10.2502 15.5833C10.2502 15.9975 10.5859 16.3333 11.0002 16.3333C11.4144 16.3333 11.7502 15.9975 11.7502 15.5833H10.2502ZM20.1668 11H19.4168C19.4168 15.6484 15.6486 19.4167 11.0002 19.4167V20.1667V20.9167C16.477 20.9167 20.9168 16.4768 20.9168 11H20.1668ZM11.0002 20.1667V19.4167C6.35177 19.4167 2.5835 15.6484 2.5835 11H1.8335H1.0835C1.0835 16.4768 5.52334 20.9167 11.0002 20.9167V20.1667ZM1.8335 11H2.5835C2.5835 6.3516 6.35177 2.58333 11.0002 2.58333V1.83333V1.08333C5.52334 1.08333 1.0835 5.52317 1.0835 11H1.8335ZM11.0002 1.83333V2.58333C15.6486 2.58333 19.4168 6.3516 19.4168 11H20.1668H20.9168C20.9168 5.52317 16.477 1.08333 11.0002 1.08333V1.83333ZM12.8335 8.25H12.0835C12.0835 8.46678 12.0206 8.66659 11.9123 8.83488L12.543 9.24072L13.1737 9.64656C13.4331 9.24348 13.5835 8.76316 13.5835 8.25H12.8335ZM9.16683 8.25H9.91683C9.91683 7.65169 10.4019 7.16667 11.0002 7.16667V6.41667V5.66667C9.57343 5.66667 8.41683 6.82326 8.41683 8.25H9.16683ZM11.0002 6.41667V7.16667C11.5985 7.16667 12.0835 7.65169 12.0835 8.25H12.8335H13.5835C13.5835 6.82326 12.4269 5.66667 11.0002 5.66667V6.41667ZM11.0002 11.9167H10.2502V12.375H11.0002H11.7502V11.9167H11.0002ZM12.543 9.24072L11.9123 8.83488C11.7988 9.01123 11.6562 9.19458 11.4865 9.4055C11.3246 9.60666 11.1322 9.83996 10.9597 10.077C10.62 10.5439 10.2502 11.1634 10.2502 11.9167H11.0002H11.7502C11.7502 11.6574 11.8778 11.3646 12.1726 10.9596C12.3173 10.7607 12.4763 10.568 12.6551 10.3458C12.8261 10.1334 13.0132 9.89595 13.1737 9.64656L12.543 9.24072ZM11.0002 14.6667H10.2502V15.5833H11.0002H11.7502V14.6667H11.0002Z" fill="currentColor"/>
            </svg>
            Como Funciona
          </a>
        </nav>
          <button className="border border-[#1B5FFF] text-[#1B5FFF] hover:text-[#FFFFFF] hover:bg-[#1B5FFF] px-6 py-2 rounded-lg font-medium transition cursor-pointer">
            Entrar
          </button>
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition shadow cursor-pointer">
            Quero Trocar
          </button>
        </div>
      </header>
    </div>
  );
}
