export default function Header() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="container flex items-center justify-between py-4 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <RefreshCw className="h-6 w-6 text-primary-blue" />
          <span className="text-xl font-bold">Desapegaí</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary-blue" prefetch={false}>
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary-blue" prefetch={false}>
            <Users className="h-5 w-5" />
            Comunidades
          </Link>
          <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary-blue" prefetch={false}>
            <HelpCircle className="h-5 w-5" />
            Como Funciona
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-primary-blue text-primary-blue hover:bg-primary-blue/10 bg-transparent"
          >
            Entrar
          </Button>
          <Button className="bg-primary-blue text-white hover:bg-primary-blue/90">Quero Trocar</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          {/* Left Column: Text Content */}
          <div className="col-span-12 md:col-span-6 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Troque o que você já não usa por o{" "}
              <span className="text-primary-blue underline decoration-primary-blue decoration-4 underline-offset-4">
                que você precisa
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
              Encontre comunidades locais para trocar itens sem gastar nada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary-blue text-white hover:bg-primary-blue/90">
                Quero trocar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-orange text-secondary-orange hover:bg-secondary-orange/10 bg-transparent"
              >
                Como funciona
              </Button>
            </div>
          </div>
          {/* Right Column: Illustration */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=500"
              width={500}
              height={400}
              alt="Illustration of item exchange"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
