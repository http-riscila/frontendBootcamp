import React from "react";
import ImageGrid from "./image-grid";

const SectionFourHome = () => {
  const galeryImagesOne = [
    {
      src: "src/assets/images/image-01-section-4-home.jpg",
      alt: "Tabuleiro de xadrez",
    },
    {
      src: "src/assets/images/image-02-section-4-home.png",
      alt: "Bicicleta infantil azul",
    },
    {
      src: "src/assets/images/image-03-section-4-home.png",
      alt: "Conjunto de panelas inox",
    },
  ];

  const galeryImagesTwo = [
    {
      src: "src/assets/images/image-04-section-4-home.png",
      alt: "Vestido adulto estampado",
    },
    {
      src: "src/assets/images/image-05-section-4-home.jpg",
      alt: "Furadeira e parafusadeira",
    },
    {
      src: "src/assets/images/image-06-section-4-home.png",
      alt: "Livro de receitas",
    },
  ];

  return (
    <section className="container mx-auto">
      <h2 className="mb-4 text-5xl font-bold">Itens recém adicionados</h2>
      <p className="mb-6 text-[#6B7280]">
        Veja o que você pode encontrar em nossas comunidades
      </p>

      <div className="flex gap-6">
        <ImageGrid images={galeryImagesOne} />
        <ImageGrid images={galeryImagesTwo} />
      </div>
    </section>
  );
};

export default SectionFourHome;
