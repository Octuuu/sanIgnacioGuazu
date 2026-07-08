import React from 'react'
import Section from '../../components/ui/Section'
import MuseumGallery from './MuseumGallery'

// Importaciones de imágenes específicas
import MuseoViedma1 from '../../assets/images/museos/MuseoViedma/muva1.jpg'
import MuseoViedma2 from '../../assets/images/museos/MuseoViedma/muva2.jpeg'
import MuseoViedma3 from '../../assets/images/museos/MuseoViedma/muva3.jpg'
import MuseoViedma4 from '../../assets/images/museos/MuseoViedma/muva4.webp'
import MuseoViedma5 from '../../assets/images/museos/MuseoViedma/muva5.jpg'

const ViedmaMuseum = () => {
  const imagenes = [MuseoViedma1, MuseoViedma2, MuseoViedma3, MuseoViedma4, MuseoViedma5]

  return (
    <Section className="bg-stone-950 py-24 text-stone-100 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase block mb-3">
              Arqueología y Colección Privada
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight font-normal text-stone-50">
              MUVA: Museo <br />Vivo Viedma
            </h2>
            
            <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed mb-8">
              El MUVA propone una curaduría inmersiva donde las reliquias dialogan con el visitante. Custodio de incalculables piezas prehispánicas, utensilios coloniales y colecciones numismáticas privadas preservadas por la familia Viedma, este museo se consolida como un centro neurálgico para la investigación antropológica de la Cuenca del Plata.
            </p>

            <blockquote className="border-l border-amber-600/60 pl-4 py-1 italic text-stone-300 font-light text-sm">
              "Un recorrido imprescindible para descifrar las capas del suelo ignaciano antes de la fundación de las reducciones."
            </blockquote>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-3 aspect-video lg:aspect-square">
            <div className="col-span-7 rounded-2xl overflow-hidden bg-stone-900">
              <img src={MuseoViedma1} alt="Pieza MUVA 1" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-5 rounded-2xl overflow-hidden bg-stone-900 mt-6">
              <img src={MuseoViedma2} alt="Pieza MUVA 2" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-5 rounded-2xl overflow-hidden bg-stone-900 -mt-6">
              <img src={MuseoViedma3} alt="Pieza MUVA 3" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-7 rounded-2xl overflow-hidden bg-stone-900">
              <img src={MuseoViedma4} alt="Pieza MUVA 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Galería Extendida con la Colección */}
        <div className="mt-20">
          <div className="flex items-center space-x-4 mb-8">
            <h3 className="text-lg font-mono tracking-wider text-stone-400 uppercase text-xs">
              Muestras Arqueológicas Registradas
            </h3>
            <div className="h-[1px] bg-stone-800 flex-grow" />
          </div>
          <MuseumGallery images={imagenes} />
        </div>

      </div>
    </Section>
  )
}

export default ViedmaMuseum