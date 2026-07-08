import Section from '../../components/ui/Section'
import { Clock, Ticket, CalendarDays } from 'lucide-react'
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

// imagenes del museo municipal
import MuseoMunicipal1 from '../../assets/images/museos/museo-municipal/museoMunicipal1.webp'
import MuseoMunicipal2 from '../../assets/images/museos/museo-municipal/museoMunicipal2.webp'
import MuseoMunicipal3 from '../../assets/images/museos/museo-municipal/museoMunicipal3.webp'
import MuseoMunicipal from '../../assets/images/museos/museo-municipal/museoMunicipal4.webp'
import MuseoMunicipal5 from '../../assets/images/museos/museo-municipal/museoMunicipal5.webp'
import MuseoMunicipal6 from '../../assets/images/museos/museo-municipal/museoMunicipal6.webp'
import MuseoMunicipal7 from '../../assets/images/museos/museo-municipal/museoMunicipal7.webp'
import MuseoMunicipal8 from '../../assets/images/museos/museo-municipal/museoMunicipal8.webp'
import MuseoMunicipal9 from '../../assets/images/museos/museo-municipal/museoMunicipal9.webp'
import MuseoMunicipal10 from '../../assets/images/museos/museo-municipal/museoMunicipal10.webp'
import MuseoMunicipal11 from '../../assets/images/museos/museo-municipal/museoMunicipal11.webp'
import MuseoMunicipal12 from '../../assets/images/museos/museo-municipal/museoMunicipal12.webp'
import MuseoMunicipal13 from '../../assets/images/museos/museo-municipal/museoMunicipal13.webp'
import MuseoMunicipal14 from '../../assets/images/museos/museo-municipal/museoMunicipal14.webp'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'

// imagenes del museo viedma

import MuseoViedma1 from '../../assets/images/museos/MuseoViedma/muva1.jpg'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'

const DiocesanMuseum = () => {
  return (
    <Section bgColor="stone" className="bg-stone-50/60 py-20 border-t border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Cabecera de Sección */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            El principal museo de la ciudad
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Museo Diocesano de Arte Sacro
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4" />
        </div>

        {/* Distribución en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Información Textual */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
              Establecido en la única edificación jesuítica original de adobe que se conserva en pie, este museo custodia una de las colecciones de arte sacro barroco-guaraní más valiosas del continente. Alberga imponentes tallas policromadas en madera del siglo XVII que reflejan el sincretismo espiritual y artístico de la época.
            </p>
            
            {/* Lista de Detalles Técnica/Minimalista */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200/60">
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-0.5">Horarios</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">Lunes a Viernes<br />08:00 a 17:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CalendarDays className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-0.5">Fin de Semana</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">Sábados<br />09:00 a 13:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ticket className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-semibold text-stone-400 tracking-wider uppercase mb-0.5">Acceso</h4>
                  <p className="text-stone-600 font-light text-xs leading-normal">G. 20.000<br /><span className="italic">Incluye servicio de guía</span></p>
                </div>
              </div>

            </div>
          </div>

          {/* Tarjeta de Imagen Fotográfica */}
          <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm relative">
            <img 
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" 
              alt="Detalle de Arte Sacro Barroco"
              className="w-full h-full object-cover brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

        </div>

      </div>
    </Section>
  )
}

export default DiocesanMuseum