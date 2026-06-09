import HeroSection from './HeroSection'
import IntroWords from './IntroWords'
import FeaturedGallery from './FeaturedGallery'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { History, Sparkles, Utensils } from 'lucide-react'
import Taniarandy from '../../assets/images/tañarandy/fondoTaniarandy.jpeg'
import Restaurant from '../../assets/images/comidas/laMartina-ruta1.jpg'
import iglesiaSanig from '../../assets/images/hero/iglesia-sanig.webp'
import Fuego from '../../assets/images/tañarandy/fuego.webp'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      <IntroWords />
      
      <FeaturedGallery />
      
      <Section bgColor="stone" className="bg-stone-50 py-24 border-t border-stone-200/60">
        
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-stone-500 uppercase block mb-3">
            Descubre más sobre nuestra ciudad
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Explora San Ignacio Guazú
          </h2>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container-custom px-4">
          
          {/* Tarjeta 1: Historia Viva */}
          <div className="group relative h-[460px] rounded-2xl overflow-hidden border border-stone-200/40 bg-stone-900 flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-xl hover:shadow-stone-950/10">
            {/* Imagen Real de Fondo */}
            <img 
              src={iglesiaSanig} 
              alt="Historia Viva" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.80] group-hover:brightness-[0.75]"
            />
            {/* Gradiente de Legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            {/* Contenido */}
            <div className="relative z-10 w-full">
              <h3 className="text-2xl font-serif text-white flex mb-3 tracking-wide font-normal">Historia Viva

                <div className="w-9 h-9 flex  items-center justify-center text-amber-400">
                <History className="h-4 w-4" />
              </div>
              </h3>
              <p className="text-stone-300 font-light text-xs md:text-sm leading-relaxed mb-6">
                Conoce el legado de la primera reducción jesuítica, su arte sacro tallado en madera y las raíces del misticismo en América del Sur.
              </p>
              <Link to="/historia" className="focus:outline-none focus:ring-0">
                <Button variant="outline" className="w-full !bg-white/5 !text-white hover:!bg-white/20 !border-white/20 transition-all duration-300">
                  Explorar Historia
                </Button>
              </Link>
            </div>
          </div>

          {/* tañarandy Místico  */}
          <div className="group relative h-[460px] rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950 flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-xl hover:shadow-amber-950/20">
            {/* Imagen Real de Fondo */}
            <img 
              src={Fuego} 
              alt="Tañarandy Místico" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.70] group-hover:brightness-[0.65]"
            />
            {/* Gradiente Ígneo para Tañarandy */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            {/* Contenido */}
            <div className="relative z-10 w-full">
              
              <h3 className="text-2xl font-serif text-white mb-3 tracking-wide font-normal flex">Tañarandy Místico

                <div className="w-9 h-9 flex items-center justify-center text-amber-300">
                  <Sparkles className="h-4 w-4" />
                </div>
              </h3>
              <p className="text-amber-100/80 font-light text-xs md:text-sm leading-relaxed mb-6">
                Siente la espiritualidad en la mítica tierra de los candiles de apepú, una tradición viva que ilumina con fuego la cultura ignaciana.
              </p>
              <Link to="/tañarandy" className="focus:outline-none focus:ring-0">
                <Button variant="primary" className="w-full !bg-amber-700 hover:!bg-amber-600 transition-all duration-300">
                  Vivir la Tradición
                </Button>
              </Link>
            </div>
          </div>

          {/* gastronomía Local */}
          <div className="group relative h-[460px] rounded-2xl overflow-hidden border border-stone-200/40 bg-stone-900 flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-xl hover:shadow-stone-950/10">
            {/* Imagen Real de Fondo */}
            <img 
              src={Restaurant} 
              alt="Gastronomía" 
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.75] group-hover:brightness-[0.65]"
            />
            {/* Gradiente de Legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            {/* Contenido */}
            <div className="relative z-10 w-full">
              
              <h3 className="text-2xl font-serif text-white mb-3 tracking-wide font-normal flex">Gastronomía

                <div className="w-9 h-9 flex items-center justify-center text-amber-400 ">
                  <Utensils className="h-4 w-4" />
                </div>
              </h3>
              <p className="text-stone-300 font-light text-xs md:text-sm leading-relaxed mb-6">
                Disfruta de los sabores tradicionales de las misiones y las propuestas gastronómicas que reflejan nuestra hospitalidad guaraní.
              </p>
              <Link to="/gastronomia" className="focus:outline-none focus:ring-0">
                <Button variant="outline" className="w-full !bg-white/5 !text-white hover:!bg-white/20 !border-white/20 transition-all duration-300">
                  Dónde Comer
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Section>
    </>
  )
}

export default HomePage