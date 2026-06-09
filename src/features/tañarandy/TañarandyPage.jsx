import Section from '../../components/ui/Section'
import CandlesSection from './CandlesSection'
import LivingPictures from './LivingPictures'
import MysticDescription from './MysticDescription'

const TañarandyPage = () => {
  return (
    <>
      {/* Sección Introducción */}
      <Section bgColor="white" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
              La noche más mística del año
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
              Tañarandy
            </h1>
            <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
          </div>

          <div className="text-stone-600 font-light text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
            <p>
              Tañarandy, la mítica "tierra de los demonios" o irreductibles que hoy se erige como un crisol de fe popular, es el escenario de una de las manifestaciones de piedad y arte colectivo más imponentes de América del Sur, celebrada ininterrumpidamente en la comunidad de San Ignacio Guazú.
            </p>
          </div>

        </div>
      </Section>
      
      {/* Módulos de contenido con alternancia estética */}
      <MysticDescription />
      <CandlesSection />
      <LivingPictures />
    </>
  )
}

export default TañarandyPage