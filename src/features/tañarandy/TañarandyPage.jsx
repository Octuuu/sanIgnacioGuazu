import Section from '../../components/ui/Section'
import CandlesSection from './CandlesSection'
import LivingPictures from './LivingPictures'
import MysticDescription from './MysticDescription'
import Taniarandy1 from '../../assets/images/tañarandy/taniarandy1.jpg'
import Taniarandy2 from '../../assets/images/tañarandy/taniarandy2.jpg'
import Taniarandy3 from '../../assets/images/tañarandy/taniarandy3.jpg'
import Taniarandy4 from '../../assets/images/tañarandy/taniarandy4.jpg'
import Taniarandy5 from '../../assets/images/tañarandy/taniarandy5.jpg'

const TañarandyPage = () => {
  const introImages = [Taniarandy1, Taniarandy2, Taniarandy3, Taniarandy4, Taniarandy5]

  return (
    <>
      {/* Sección Introducción Narrativa */}
      <Section bgColor="white" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-800 uppercase block mb-3">
              El rito colectivo y artístico del Paraguay
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight font-normal">
              La Tierra de los Irreductibles
            </h1>
            <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 text-stone-600 font-light text-base md:text-lg leading-relaxed space-y-6 text-justify">
              <p>
                Etimológicamente asociada en el imaginario colonial como la <span className="italic font-medium text-stone-900">"tierra de los demonios"</span> o de los heréticos, la compañía de Tañarandy en San Ignacio Guazú ostenta ese nombre debido a sus antiguos pobladores indígenas, quienes se resistieron tenazmente a perder su autonomía espiritual absoluta frente a las estrictas pautas de la reducción jesuítica tradicional.
              </p>
              <p>
                Sin embargo, desde el año 1992, bajo el liderazgo creativo y social del artista plástico paraguayo <span className="font-medium text-stone-900">Koki Ruiz</span> y la propia comunidad ignaciana, este rincón rural experimentó una metamorfosis sin igual. Aquella rebeldía histórica se canalizó hacia una de las expresiones de fe sincrética, misticismo y arte vivo comunitario más impresionantes y conmovedoras del continente americano.
              </p>
            </div>
            
            <div className="lg:col-span-6 text-stone-600 font-light text-base md:text-lg leading-relaxed space-y-6 text-justify">
              <p>
                Cada Semana Santa, el silencio del campo se fragmenta para dar paso a una inmensa obra efímera donde la fe popular paraguaya no se vive de forma estática o pasiva. Los campesinos, artesanos, jóvenes y ancianos se transforman simultáneamente en artífices, pintores, cantores y custodios de un patrimonio vivo que atrae miradas de todas partes del globo, difuminando por completo la línea divisoria entre lo sagrado terrenal y la estética clásica universal.
              </p>
            </div>
          </div>

          {/* Mosaico Editorial de Apertura */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {introImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-xl overflow-hidden h-64 border border-stone-200/60 shadow-sm ${
                  idx === 2 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`Estampa de Tañarandy ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            ))}
          </div>

        </div>
      </Section>
      
      <MysticDescription />
      <CandlesSection />
      <LivingPictures />
    </>
  )
}

export default TañarandyPage