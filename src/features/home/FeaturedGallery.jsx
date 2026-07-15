import Section from '../../components/ui/Section'
import TemploSanig from '../../assets/images/hero/iglesia-sanig-noche.webp'
import MuseDiocesano from '../../assets/images/hero/museoDiocesano.png'
import Taniarandy from '../../assets/images/tañarandy/fondoTaniarandy.jpeg'
import PlazaSanRoque from '../../assets/images/plazas/plazaSanRoque/plazaSanRoque.jpg'

const FeaturedGallery = () => {
  const places = [
    { 
      name: "Templo de San Ignacio", 
      type: "Arquitectura Jesuítica",
      image: TemploSanig 
    },
    { 
      name: "Museo Diocesano", 
      type: "Arte Sacro Jesuítico",
      image: MuseDiocesano
    },
    { 
      name: "Tañarandy", 
      type: "Tradición Cultural",
      image: Taniarandy
    },
    { 
      name: "Plaza San Roque", 
      type: "Espacio Público",
      image: PlazaSanRoque
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