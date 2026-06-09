import Section from '../../components/ui/Section'
import { TreePine } from 'lucide-react'

const OutdoorSpots = () => {
  const spots = [
    {
      title: "Mirador del Cerro",
      desc: "Espacio natural elevado ideal para contemplar atardeceres con una vista panorámica de la vegetación misionera."
    },
    {
      title: "Senderos Ecológicos",
      desc: "Circuitos naturales integrados para explorar la flora nativa y disfrutar de paseos bajo la sombra de lapachos."
    },
    {
      title: "Parque de la Reducción",
      desc: "Un circuito ideal para caminatas al aire libre y descanso familiar rodeado de un entorno sereno y verde."
    }
  ]

  return (
    <Section bgColor="white" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase block mb-3">
            Naturaleza y recreación
          </span>
          <h2 className="text-3xl font-serif text-stone-900 font-normal">
            Espacios al Aire Libre
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4" />
        </div>

        {/* Grid de Tarjetas Minimalistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {spots.map((spot, index) => (
            <div 
              key={index} 
              className="bg-stone-50/50 border border-stone-200/40 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-stone-50"
            >
              <div>
                <div className="text-amber-800/80 mb-3">
                  <TreePine className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg text-stone-900 font-normal mb-2 tracking-wide">
                  {spot.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {spot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default OutdoorSpots