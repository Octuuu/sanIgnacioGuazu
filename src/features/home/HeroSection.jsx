import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import bgSanIgnacio from '../../assets/san-ignacio.jpg' 

const HeroSection = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-stone-950">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgSanIgnacio})` }}
      />
      
    
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />

      {/* Contenido Principal */}
      <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-white z-10">
        
        <span className="text-amber-600 font-mono tracking-[0.25em] uppercase text-xs md:text-sm mb-4 block">
          Misiones &bull; Paraguay
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif font-normal mb-5 tracking-tight max-w-4xl leading-tight text-stone-50">
          San Ignacio Guazú
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-xl text-stone-300 font-light leading-relaxed font-serif italic">
          Cuna del Barroco Hispano-Guaraní.
        </p>
        
        {/* Acciones e Itinerarios */}
        <div className="flex flex-wrap gap-4">
          <Link to="/historia" className="focus:outline-none focus:ring-0">
            <Button variant="primary" className="!font-sans !font-medium">
              Descubrir Historia
            </Button>
          </Link>
          <Link to="/mapa" className="focus:outline-none focus:ring-0">
            <Button 
              variant="secondary" 
              className="!bg-white/10 !text-white hover:!bg-white/20 !border-white/15 !font-sans !font-medium backdrop-blur-sm"
            >
              Ver Mapa Interactivo
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroSection