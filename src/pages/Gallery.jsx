const photos = [
  {
    id: "1",
    nombre: "Book N° 1",
    imagen: "../public/images/Book1/book1-1.jpg",
    detalle: "Fotos de Modelo Book N° 1",
   
  },
  {
    id: "2",
    nombre: "Book N° 2",
    imagen: "../public/images/Casamientos/Casam2/casam-2-1.jpg",
    detalle: "Fotos de Modelo Book N° 2",
   
  },
  {
    id: "3",
    nombre: "Book N° 3",
    imagen: "../public/images/Book3/Book3-1.jpg",
    detalle: "Fotos de Modelo Book N° 3",
   
  },
  {
    id: "4",
    nombre: "Book N° 4",
    imagen: "../public/images/Book4/book-4-1.jpg",
    detalle: "Fotos de Modelo Book N° 4",
   
  },
  {
    id: "5",
    nombre: "Book N° 5",
    imagen: "../public/images/Book5/book-5-1.jpg",
    detalle: "Fotos de Modelo Book N° 5",
   
  },
  {
    id: "6",
    nombre: "Book N° 6",
    imagen: "../public/images/Book6/book-6-1.jpg",
    detalle: "Fotos de Modelo Book N° 6",
   
  },
  {
    id: "7",
    nombre: "Book N° 7",
    imagen: "../public/images/Book7/book-7-1.jpg",
    detalle: "Fotos de Modelo Book N° 7",
   
  },
  {
    id: "8",
    nombre: "Book N° 8",
    imagen: "../public/images/Book8/book-8-1.jpg",
    detalle: "Fotos de Modelo Book N° 8",
   
  },
  {
    id: "9",
    nombre: "Book N° 9",
    imagen: "../public/images/Book9/book-9-1.jpg",
    detalle: "Fotos de Modelo Book N° 9",
   
  },
  {
    id: "10",
    nombre: "Book N° 10",
    imagen: "public/images/Cumple15/Cumple3/cumpl-3-1.jpg",
    detalle: "Fotos de Modelo Book N° 10",
   
  },
  {
    id: "11",
    nombre: "Book N° 11",
    imagen: "public/images/Cumple15/Cumple2/cumple2-1.jpg",
    detalle: "Fotos de Modelo Book N° 11",
   
  },
  {
    id: "12",
    nombre: "Book N° 12",
    imagen: "../public/images/Fiestitas/fiesti-1.jpg",
    detalle: "Fotos de Modelo Book N° 12",
   
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden">
            <img
              src={photo.imagen}
              alt={photo.nombre}
              className="w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
