import logoFooter from "../assets/icons/logo-footer.svg";
import mapPin from "../assets/icons/map-pin.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import heart from "../assets/icons/heart.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

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
                  src={logoFooter}
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
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  />
                </a>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-[#FFA15D]"
                  aria-label="Facebook"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  />
                </a>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-[#FFA15D]"
                  aria-label="YouTube"
                >
                  <img
                    src={youtubeIcon}
                    alt="YouTube"
                    className="h-6 w-6 text-[#FE7A1B] transition-colors group-hover:text-[#FFA15D]"
                  />
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
                    src={mapPin}
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
                    src={phone}
                    className="h-5 w-5 shrink-0 text-[#FE7A1B]"
                    alt="Telefone"
                  />
                  <a href="tel:+551199999999" className="text-gray-100 hover:text-[#FE7A1B] transition-colors">
                    (11) 9999-9999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={email}
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
            src={heart}
            className="h-6 w-6 fill-red-500 text-red-500"
            alt="Coração"
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
