import Section from '../../components/ui/Section'
import { plazas } from '../../data/plazas'
import { SunDim } from 'lucide-react'

const PlazaList = () => {
  return (
    <Section bgColor="stone" className="bg-stone-50/60 py-20 border-t border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Las plazas más emblemáticas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Nuestras Plazas
          </h2>
        </div>

        {/* Grid de Plazas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plazas.map((plaza) => (
            <div 
              key={plaza.id}
              className="bg-white border border-stone-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors duration-300 hover:bg-stone-50/30"
            >
              <div>
                {/* Nombre de la Plaza */}
                <h3 className="font-serif text-xl text-stone-900 font-normal mb-2 tracking-wide">
                  {plaza.name}
                </h3>
                
                {/* Descripción */}
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-5">
                  {plaza.description}
                </p>
                
                {/* Etiquetas de características / Atributos */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {plaza.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-amber-50 text-amber-900 border border-amber-200/40 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pie de la tarjeta con recomendación de horario */}
              <div className="flex items-center space-x-2 pt-4 border-t border-stone-100 text-stone-400">
                <SunDim className="h-4 w-4 text-amber-700/60" />
                <p className="font-mono text-xs tracking-wider uppercase">
                  Mejor momento: <span className="text-stone-600 font-normal font-sans normal-case">{plaza.bestTime}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default PlazaList