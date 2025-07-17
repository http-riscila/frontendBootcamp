<main className="container py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
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

          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/placeholder.svg?height=400&width=500"
              width={500}
              height={400}
              alt="Illustration of item exchange"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>