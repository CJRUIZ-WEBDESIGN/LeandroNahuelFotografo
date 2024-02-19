const services = [
  {
    id: 1,
    name: "Fotografía de Bodas",
    imagen: "../public/images/ParaSections/casamientos.jpg",
    description:
      "Captura de los momentos más emotivos y significativos de tu día especial, con un enfoque en la autenticidad y la belleza natural.",
  },
  {
    id: 2,
    name: "Sesiones de Retratos",
    imagen: "../public/images/ParaSections/retrato.png",
    description:
      "Sesiones de retrato personalizadas, incluyendo retratos individuales, de familia, de parejas y retratos profesionales para redes sociales o corporativos.",
  },
  {
    id: 3,
    name: "Fotografía de Eventos",
    imagen: "../public/images/ParaSections/fiesta60.jpg",

    description:
      "Cobertura fotográfica completa de eventos corporativos, conferencias, conciertos y celebraciones, capturando la esencia y los momentos clave del evento.",
  },
  {
    id: 4,
    name: "Fotografía de Productos",
    imagen: "../public/images/ParaSections/Nescafe-portafolio.jpg",
    description:
      "Fotografía profesional de productos para catálogos, tiendas en línea y promoción en redes sociales, con enfoque en destacar las características y calidad del producto.",
  },
  {
    id: 5,
    name: "Fotografía Inmobiliaria",
    imagen: "../public/images/ParaSections/Inmo.jpg",

    description:
      "Servicios de fotografía arquitectónica e inmobiliaria, ofreciendo imágenes de alta calidad para promocionar propiedades en el mercado.",
  },
  {
    id: 6,
    name: "Edición y Retoque Digital",
    imagen: "../public/images/ParaSections/retoque.png",

    description:
      "Servicios de post-producción, incluyendo edición y retoque fotográfico para mejorar la calidad de las imágenes y cumplir con las especificaciones del cliente.",
  },
  {
    id: 7,
    name: "Fotografía de Moda",
    imagen: "../public/images/ParaSections/moda.png",
    description:
      "Sesiones fotográficas para diseñadores de moda, marcas, revistas y modelos, con un enfoque creativo y editorial.",
  },
  {
    id: 8,
    name: "Fotografía de Paisajes y Naturaleza",
    imagen: "../public/images/ParaSections/airelibre.png",
    description:
      "Captura de la belleza del mundo natural, disponible para proyectos editoriales, comerciales o para la venta de impresiones artísticas.",
  },
  {
    id: 9,
    name: "Workshops y Cursos de Fotografía",
    imagen: "../public/images/ParaSections/cursos.png",
    description:
      "Ofrecimiento de talleres y cursos para aficionados y profesionales que deseen mejorar sus habilidades fotográficas.",
  },
  {
    id: 10,
    name: "Fotografía Aérea con Drones",
    imagen: "../public/images/ParaSections/drones.png",
    description:
      "Servicios de fotografía y videografía aérea para proyectos especiales, eventos y promoción inmobiliaria, ofreciendo perspectivas únicas e impresionantes.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-16">Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <img className="sm:flex p-1 m-1 columns-1 md: columns-2 bg-fixed" src={service.imagen} alt={service.nombre}  />
            <h3 className="text-xl font-bold mb-7">{service.name}</h3>

            <p className="text-gray-700 font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
