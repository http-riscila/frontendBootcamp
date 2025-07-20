const ImageGrid = ({ images }) => {
  if (!images || images.length < 3) return null;
  return (
    <div className="max-w-lx mx-auto mb-40 grid grid-cols-3 gap-6">
      <div className="col-span-2 row-span-2">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="aspect-square h-full max-h-[420px] w-full max-w-[410px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
        />
      </div>

      <div>
        <img
          src={images[1].src}
          alt={images[1].alt}
          className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
        />
      </div>
      <div>
        <img
          src={images[2].src}
          alt={images[2].alt}
          className="aspect-square h-full max-h-[220px] w-full max-w-[210px] rounded-lg border border-[rgba(121,118,125,0.5)] object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
