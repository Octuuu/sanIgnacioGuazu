import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
// Importamos la imagen desde la carpeta assets
import bgSanIgnacio from '../../assets/san-ignacio.jpg' 

const HeroSection = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-stone-900">
      {/* Contenedor de la imagen de fondo con un sutil efecto de zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgSanIgnacio})` }}
      />
      
      {/* Overlay: Degradado aesthetic oscuro para dar contraste y legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

      {/* Contenido principal */}
      <div className="relative container-custom h-full flex flex-col justify-center px-6 md:px-12 text-white z-10">
        <span className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3 drop-shadow">
          Capital del Barroco Hispano-Guaraní
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          San Ignacio Guazú
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-stone-200 font-light leading-relaxed drop-shadow">
          Corazón de las Misiones Jesuíticas en Paraguay
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link to="/historia">
            <Button variant="primary" className="shadow-lg shadow-amber-900/30 hover:scale-105 transition-transform">
              Descubrir Historia
            </Button>
          </Link>
          <Link to="/mapa">
            <Button variant="secondary" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
              Ver Mapa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection