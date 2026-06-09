import HeroSection from './HeroSection'
import IntroWords from './IntroWords'
import FeaturedGallery from './FeaturedGallery'
import Section from '../../components/ui/Section'
import Title from '../../components/ui/Title'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
// Importamos unos iconos minimalistas para las tarjetas
import { History, Sparkles, Utensils } from 'lucide-react'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      <IntroWords />
      
      <FeaturedGallery />
      
      {/* Sección con color de fondo "stone" (piedra) muy suave en lugar de un gris genérico */}
      <Section bgColor="stone" className="bg-stone-50/60 py-20 border-t border-stone-100">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase block mb-2">
            Descubre más sobre nuestra ciudad
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
            Explora San Ignacio Guazú
          </h2>
        </div>

        {/* Grid de Tarjetas Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 container-custom px-4">
          
          {/* Tarjeta 1: Historia */}
          <div className="bg-white border border-stone-200/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-5">
              <History className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Historia Viva</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6 max-w-[240px]">
              Conoce el fascinante legado artístico y las raíces de las misiones jesuíticas.
            </p>
            <div className="mt-auto w-full">
              <Link to="/historia">
                <Button variant="outline" className="w-full py-2.5 rounded-xl border-stone-200 hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors">
                  Ver más
                </Button>
              </Link>
            </div>
          </div>

          {/* Tarjeta 2: Tañarandy */}
          <div className="bg-white border border-stone-200/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-5">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Tañarandy Místico</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6 max-w-[240px]">
              Siente la magia y espiritualidad en la mítica tierra de los candiles de apepú.
            </p>
            <div className="mt-auto w-full">
              <Link to="/tañarandy">
                <Button variant="outline" className="w-full py-2.5 rounded-xl border-stone-200 hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors">
                  Ver más
                </Button>
              </Link>
            </div>
          </div>

          {/* Tarjeta 3: Gastronomía */}
          <div className="bg-white border border-stone-200/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-5">
              <Utensils className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-stone-900 mb-2 tracking-tight">Gastronomía</h3>
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6 max-w-[240px]">
              Disfruta de los sabores autóctonos y la cocina tradicional guaraní.
            </p>
            <div className="mt-auto w-full">
              <Link to="/gastronomia">
                <Button variant="outline" className="w-full py-2.5 rounded-xl border-stone-200 hover:bg-stone-50 text-stone-700 text-sm font-medium transition-colors">
                  Ver más
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