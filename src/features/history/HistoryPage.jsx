import Section from '../../components/ui/Section'
import OriginsTimeline from './OriginsTimeline'
import BaroqueHighlight from './BaroqueHighlight'

const HistoryPage = () => {
  return (
    <>
      <Section bgColor="white" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          {/* Título Principal */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
              Desde 1609 hasta hoy
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
              Historia y Cultura
            </h1>
            <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
          </div>

          {/* Bloque de Introducción Editorial */}
          <div className="space-y-6 text-stone-600 font-light text-base md:text-lg leading-relaxed text-center md:text-left md:px-6">
            <p>
              Las reducciones jesuíticas guaraníes representan uno de los capítulos socioculturales más fascinantes de la historia colonial en América. <span className="font-medium text-stone-900">San Ignacio Guazú</span> ostenta el orgullo de ser la primera de todas ellas, fundada en el año 1609 como el punto de partida de este gran experimento misional.
            </p>
            <p>
              El llamado <span className="italic font-medium text-stone-900">Barroco Hispano-Guaraní</span> es la manifestación tangible de ese encuentro: un estilo único en el mundo que fusionó la doctrina y simetría europea con la cosmovisión, el misticismo y la inigualable destreza artesanal del pueblo guaraní.
            </p>
          </div>

        </div>
      </Section>
      
      {/* Componentes adicionales integrados */}
      <OriginsTimeline />
      
      <BaroqueHighlight />
    </>
  )
}

export default HistoryPage