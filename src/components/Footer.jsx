export default function Footer() {
  return (
    <footer className="w-full bg-[#1a202c] py-12 text-gray-300 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-10 sm:px-6 md:px-12 lg:px-0">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-20">
          {/* Logo e Descrição */}
          <div className="lg:col-span-4">
            <div className="space-y-4 text-sm">
              <div className="font-inter flex items-center font-bold text-white">
                <img
                  src="src/assets/icons/logo-footer.svg?height=210&width=44"
                  alt="Desapegaí Logo"
                  width={210}
                />
              </div>
              <p className="leading-relaxed text-gray-300">
                Conectando comunidades através de trocas sustentáveis. Transforme
                o que você não usa mais em algo especial para outra pessoa.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="group text-gray-400 hover:text-[#FFA15D]"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-[#FFA15D]"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-[#FFA15D]"
                  aria-label="YouTube"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  >
                    <path
                      d="M12 19C9.7 19 5.6 18.8 3.9 18.4C3.2 18.2 2.7 17.7 2.5 17C2.2 15.9 2 13.6 2 12C2 10.4 2.2 8.1 2.5 7C2.7 6.3 3.2 5.8 3.9 5.6C5.6 5.2 9.7 5 12 5C14.3 5 18.4 5.2 20.1 5.6C20.8 5.8 21.3 6.3 21.5 7C21.8 8.1 22 10.4 22 12C22 13.6 21.8 15.9 21.5 17C21.3 17.7 20.8 18.2 20.1 18.4C18.4 18.8 14.3 19 12 19Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 15L15 12L10 9V15Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Espaçador */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Rápidos */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-sm">
              <h3 className="text-lg font-semibold text-white">Links rápidos</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Como Funciona
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Categorias
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Regras da Comunidade
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Dicas de Segurança
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  FAQ
                </a>
              </nav>
            </div>
          </div>

          {/* Suporte */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-sm">
              <h3 className="text-lg font-semibold text-white">Suporte</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Contato
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Reportar Problema
                </a>
                <a href="#" className="block text-gray-100 hover:text-[#FE7A1B] transition-colors">
                  Central de Ajuda
                </a>
              </nav>
            </div>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <div className="space-y-4 text-sm">
              <h3 className="text-lg font-semibold text-white">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <img
                    src="src/assets/icons/map-pin.svg"
                    className="h-5 w-5 shrink-0 text-[#FE7A1B] mt-0.5"
                    alt="Localização"
                  />
                  <p className="text-gray-100 leading-relaxed">
                    Rua das Trocas, 123
                    <br />
                    Centro, Cidade - Estado
                    <br />
                    CEP: 12345-678
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/phone.svg"
                    className="h-5 w-5 shrink-0 text-[#FE7A1B]"
                    alt="Telefone"
                  />
                  <a href="tel:+551199999999" className="text-gray-100 hover:text-[#FE7A1B] transition-colors">
                    (11) 9999-9999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/email.svg"
                    className="h-5 w-5 shrink-0 text-[#FE7A1B]"
                    alt="Email"
                  />
                  <a
                    href="mailto:contato@desapegai.com"
                    className="text-gray-100 hover:text-[#FE7A1B] transition-colors"
                  >
                    contato@desapegai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1240px] flex-col items-center justify-between gap-4 border-t border-gray-600 px-4 pt-8 text-gray-100 sm:px-6 md:flex-row md:px-12 lg:px-0">
        <p className="flex items-center gap-1">
          © 2025 Desapegaí. Feito com{" "}
          <img
            src="src/assets/icons/heart.svg"
            className="h-6 w-6 fill-red-500 text-red-500"
          />{" "}
          para a comunidade.
        </p>
        <nav className="flex gap-4 md:gap-6">
          <a href="#" className="text-gray-100 hover:text-[#FE7A1B] transition-colors">
            Política de Cookies
          </a>
          <a href="#" className="text-gray-100 hover:text-[#FE7A1B] transition-colors">
            Acessibilidade
          </a>
          <a href="#" className="text-gray-100 hover:text-[#FE7A1B] transition-colors">
            Mapa do Site
          </a>
        </nav>
      </div>
    </footer>
  );
}
