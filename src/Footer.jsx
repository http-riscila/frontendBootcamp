export default function Footer() {
  return (

    <div className="flex flex-col min-h-screen">
      
      <footer className="w-full py-12 md:py-16 lg:py-20 bg-[#1a202c] text-gray-300">
        <div className="max-w-[1240px] mx-auto px-10 sm:px-6 md:px-12 grid lg:gap-x-85 gap-11 lg:grid-cols-12 md:grid-cols-2 lg:gap-x-18 lg:px-[0]">
          <div className="space-y-4 lg:col-span-[280px] w-[200px]">
            <div className="flex items-center font-bold font-inter text-white">
              <img
                src="/assets/logo-footer.svg?height=210&width=44"
                alt="Desapegaí Logo"
                width={210}
                height={44}
                
              />
            </div>
            <p className="leading-relaxed">
              Conectando comunidades através de trocas sustentáveis. Transforme o que você não usa mais em algo especial para outra pessoa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white"  aria-label="Instagram">
                <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white"  aria-label="Facebook">
                <img src="/assets/facebook.svg" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white"  aria-label="YouTube">
                <img src="/assets/youtube.svg" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-[200px] w-[180px]">
            <h3 className="text-lg font-semibold text-white">Links rápidos</h3>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-white" >
                Como Funciona
              </a>
              <a href="#" className="block hover:text-white" >
                Categorias
              </a>
              <a href="#" className="block hover:text-white" >
                Regras da Comunidade
              </a>
              <a href="#" className="block hover:text-white" >
                Dicas de Segurança
              </a>
              <a href="#" className="block hover:text-white" >
                FAQ
              </a>
            </nav>
          </div>
          <div className="space-y-4 lg:col-span-[200px] w-[180px]">
            <h3 className="text-lg font-semibold text-white">Suporte</h3>
            <nav className="space-y-2">
              <a href="#" className="block hover:text-white" >
                Contato
              </a>
              <a href="#" className="block hover:text-white" >
                Política de Privacidade
              </a>
              <a href="#" className="block hover:text-white" >
                Termos de Uso
              </a>
              <a href="#" className="block hover:text-white" >
                Reportar Problema
              </a>
              <a href="#" className="block hover:text-white" >
                Central de Ajuda
              </a>
            </nav>
          </div>
          <div className="space-y-4 lg:col-span-[200px] w-[240px]">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <img src="/assets/map-pin.svg" className="w-6 h-6 text-gray-400 shrink-0" />
                <p>
                  Rua das Trocas, 123
                  <br />
                  Centro, Cidade - Estado
                  <br />
                  CEP: 12345-678
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/phone.svg" className="w-6 h-6 text-gray-400 shrink-0" />
                <a href="tel:+551199999999" className=" hover:text-white" >
                  (11) 9999-9999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/email.svg" className="w-6 h-6 text-gray-400 shrink-0" />
                <a href="mailto:contato@desapegai.com" className=" hover:text-white" >
                  contato@desapegai.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 lg:pl-[0] lg:pr-[0]">
          <p className="flex items-center gap-1">
            © 2025 Desapegaí. Feito com <img src="/assets/heart.svg" className="w-6 h-6 text-red-500 fill-red-500" /> para a comunidade.
          </p>
          <nav className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white">
              Política de Cookies
            </a>
            <a href="#" className="hover:text-white">
              Acessibilidade
            </a>
            <a href="#" className="hover:text-white">
              Mapa do Site
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
