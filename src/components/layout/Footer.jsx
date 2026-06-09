import { MapPin, Phone, Mail } from 'lucide-react'

// Construimos los iconos de redes directamente con SVG puros de Lucide 
// para evitar cualquier fallo de exportación en el bundle de Vite.
const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dinámico para 2026

  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-stone-900 select-none">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Identidad Institucional */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white font-normal tracking-wide">
              San Ignacio Guazú
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-sm">
              Capital del Barroco Hispano-Guaraní y corazón de las antiguas misiones jesuíticas en el Paraguay. Un legado vivo tallado en piedra y fe.
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-stone-300 font-medium tracking-wide">
              Contacto Turístico
            </h3>
            <div className="space-y-3 font-mono text-xs text-stone-400 tracking-wide">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-800 flex-shrink-0" />
                <span>San Ignacio, Misiones, Paraguay</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-800 flex-shrink-0" />
                <span>+595 (782) 232-214</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-800 flex-shrink-0" />
                <span className="hover:text-stone-200 transition-colors">turismo@sanignacio.gov.py</span>
              </p>
            </div>
          </div>

          {/* Redes y Canales Digitales */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-stone-300 font-medium tracking-wide">
              Canales Oficiales
            </h3>
            <div className="flex space-x-4 pt-1">
              <a 
                href="#" 
                className="text-stone-400 hover:text-amber-700 transition-colors duration-300 focus:outline-none"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-400 hover:text-amber-700 transition-colors duration-300 focus:outline-none"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Separador e Información de Derechos */}
        <div className="border-t border-stone-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-stone-500 font-mono text-[11px] tracking-wider space-y-2 sm:space-y-0">
          <p>
            &copy; {currentYear} SAN IGNACIO GUAZÚ &bull; TURISMO Y CULTURA
          </p>
          <p className="text-[10px] text-stone-600 uppercase font-light">
            Memoria viva de las misiones
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer