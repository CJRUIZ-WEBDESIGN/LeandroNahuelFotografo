
const HeroBanner = () => {
  return (
    <div className="relative h-auto">
      <img src="https://c4.wallpaperflare.com/wallpaper/280/433/199/camera-lens-nikon-dslr-wallpaper-preview.jpg" alt="Imagen destacada" className="w-full h-auto object-cover"/>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center">

          <h1 className="text-white text-4xl font-bold">Capturando Momentos Únicos</h1>
          <p className="text-white text-xl mt-2">Explora el mundo a través de mi lente</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
