import Section from '../../components/ui/Section'
import { Flame } from 'lucide-react'

const CandlesSection = () => {
  return (
    <Section bgColor="stone" className="bg-stone-50 py-20 border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Miles de luces en la noche
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal">
            Los Candiles de Apepú
          </h2>
          <div className="w-12 h-[1px] bg-amber-700/20 mx-auto mt-4" />
        </div>

        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto mt-12">
          
          <div className="space-y-4 text-stone-600 font-light text-base leading-relaxed">
            <p>
              Al caer la tarde, el Yvága Rape se ilumina por completo. Decenas de miles de candiles artesanales, moldeados en cáscaras de apepú y alimentados con grasa vacuna, son encendidos de forma manual por los propios pobladores locales.
            </p>
            <p>
              Este sendero de fuego crea un camino místico y dorado que guía el paso de la procesión de la Virgen de la Dolorosa, rodeada por el conmovedor canto de los estacioneros.
            </p>
          </div>

          {/* Tarjeta Informativa Minimalista */}
          <div className="bg-white border border-stone-200/60 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 mb-4">
              <Flame className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase mb-1">
              CONVOCATORIA ANUAL
            </span>
            <h3 className="font-serif text-lg text-stone-900 font-normal mb-2">
              Cada Viernes Santo
            </h3>
            <p className="text-stone-500 font-mono text-xs tracking-wider">
              Inicio al atardecer
            </p>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default CandlesSection