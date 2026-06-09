import Section from '../../components/ui/Section'

const FeaturedGallery = () => {
  const places = [
    { 
      name: "Templo de San Ignacio", 
      type: "Arquitectura Jesuítica",
      image: "https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=600&q=80" // Fachada colonial/barroca e institucional
    },
    { 
      name: "Museo Diocesano", 
      type: "Arte Sacro Jesuítico",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" // Arte/imaginería barroca detallada
    },
    { 
      name: "Tañarandy", 
      type: "Tradición Cultural",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80" // Misticismo nocturno cálido iluminado por fuego/velas
    },
    { 
      name: "Plaza de Armas", 
      type: "Espacio Público",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" // Naturaleza, árboles centenarios y entorno verde
    }
  ]

  return (
    <Section bgColor="white" className="py-20 bg-white">
      
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
          Lugares a visitar
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
          Puntos de interés
        </h2>
        <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4" />
      </div>

      {/* Grid de tarjetas fotográficas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container-custom px-4">
        {places.map((place, index) => (
          <div 
            key={index} 
            className="group relative h-[380px] rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 shadow-sm flex flex-col justify-end"
          >
            {/* Imagen de fondo con animación de escala */}
            <img 
              src={place.image} 
              alt={place.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105 brightness-[0.85] group-hover:brightness-[0.75]" 
              loading="lazy"
            />

            {/* Gradiente interno para que el texto siempre sea legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent transition-opacity duration-300" />

            {/* Contenido de la tarjeta */}
            <div className="relative p-6 z-10 transform transition-transform duration-300">
              <span className="inline-block text-[10px] font-semibold tracking-widest text-amber-400 uppercase mb-2">
                {place.type}
              </span>
              <h3 className="font-serif text-xl text-white font-normal leading-tight tracking-wide">
                {place.name}
              </h3>
              
              {/* Línea decorativa sutil al hacer hover */}
              <div className="w-0 h-[1px] bg-amber-400/60 mt-3 transition-all duration-500 group-hover:w-16" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FeaturedGallery