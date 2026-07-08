import React from 'react'
import Section from '../../components/ui/Section'
import { Clock, Ticket, CalendarDays } from 'lucide-react'
import MuseumGallery from './MuseumGallery'

// Importaciones de imágenes específicas
import MuseoDiocesano from '../../assets/images/museos/museoDiocesano/museoDiocesano.png'
import MuseoDiocesano1 from '../../assets/images/museos/museoDiocesano/museoDiocesano1.webp'
import MuseoDiocesano2 from '../../assets/images/museos/museoDiocesano/museoDiocesano2.webp'
import MuseoDiocesano3 from '../../assets/images/museos/museoDiocesano/museoDiocesano3.webp'
import MuseoDiocesano4 from '../../assets/images/museos/museoDiocesano/museoDiocesano4.webp'
import MuseoDiocesano5 from '../../assets/images/museos/museoDiocesano/museoDiocesano5.webp'
import MuseoDiocesano6 from '../../assets/images/museos/museoDiocesano/museoDiocesano6.webp'
import MuseoDiocesano7 from '../../assets/images/museos/museoDiocesano/museoDiocesano7.webp'
import MuseoDiocesano8 from '../../assets/images/museos/museoDiocesano/museoDiocesano8.webp'
import MuseoDiocesano9 from '../../assets/images/museos/museoDiocesano/museoDiocesano9.webp'
import MuseoDiocesano10 from '../../assets/images/museos/museoDiocesano/museoDiocesano10.webp'
import MuseoDiocesano11 from '../../assets/images/museos/museoDiocesano/museoDiocesano11.webp'

const DiocesanMuseum = () => {
  const imagenes = [
    MuseoDiocesano1, MuseoDiocesano2, MuseoDiocesano3, MuseoDiocesano4, 
    MuseoDiocesano5, MuseoDiocesano6, MuseoDiocesano7, MuseoDiocesano8, 
    MuseoDiocesano9, MuseoDiocesano10, MuseoDiocesano11
  ]

  return (
    <Section bgColor="stone" className="bg-stone-50/60 py-24 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Distribución en dos columnas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          
          {/* Información Textual */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-amber-800 uppercase block mb-3">
                Patrimonio Histórico del Continente
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight leading-tight">
                Museo Diocesano <br />de Arte Sacro
              </h2>
              <div className="w-12 h-[2px] bg-amber-800/40 mt-4" />
            </div>

            <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
              Establecido dentro de la única edificación jesuítica original de adobe que continúa en pie, este museo custodia una de las colecciones de arte sacro barroco-guaraní más valiosas del mundo. Sus cuatro salas albergan majestuosas tallas policromadas en madera del siglo XVII, revelando el sincretismo técnico, espiritual y artístico surgido en la antigua Reducción de San Ignacio Guazú.
            </p>
            
            {/* Detalles Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-1">Horarios</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">Lunes a Viernes<br />08:00 a 17:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CalendarDays className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-1">Fines de Semana</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">Sábados<br />09:00 a 13:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ticket className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-1">Acceso</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">G. 20.000<br /><span className="italic text-stone-400">Incluye servicio de guía</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Imagen Destacada */}
          <div className="lg:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden border border-stone-200/60 shadow-xl relative group">
            <img 
              src={MuseoDiocesano} 
              alt="Fachada Histórica del Museo Diocesano"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Galería de Colección Permanente */}
        <div className="mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <h3 className="text-xl md:text-2xl font-serif text-stone-800 font-normal">
              Archivo Visual y Colección
            </h3>
            <div className="h-[1px] bg-stone-200 flex-grow" />
          </div>
          <MuseumGallery images={imagenes} />
        </div>

      </div>
    </Section>
  )
}

export default DiocesanMuseum