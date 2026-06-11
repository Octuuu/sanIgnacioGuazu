import Section from '../../components/ui/Section'
import OriginsTimeline from './OriginsTimeline'
import BaroqueHighlight from './BaroqueHighlight'
import iglesiaSanig from '../../assets/images/hero/iglesia-sanig.webp'

const HistoryPage = () => {
  return (
    <>
      {/* Sección Introductoria Editorial */}
      <Section bgColor="white" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-amber-800 uppercase block mb-3">
              Desde 1609 hasta la eternidad
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight font-normal">
              Historia y Cultura
            </h1>
            <div className="w-16 h-[1px] bg-amber-700/40 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto Expandido y Profundo */}
            <div className="lg:col-span-7 space-y-6 text-stone-600 font-light text-base md:text-lg leading-relaxed text-justify">
              <p>
                Las reducciones jesuíticas guaraníes representan uno de los experimentos socioculturales, urbanísticos y espirituales más fascinantes en la historia de la humanidad. Lejos de ser meros asentamientos coloniales, estos espacios se convirtieron en auténticas ciudades-estado donde la cultura nativa y el humanismo europeo ensayaron una convivencia sin precedentes. 
              </p>
              <p>
                Dentro de este vasto sistema, <span className="font-medium text-stone-900">San Ignacio Guazú</span> ostenta el título indiscutible de <span className="italic">"Célula Madre"</span>. Fundada originalmente en tierras lejanas y trasladada tras superar el acoso de los bandeirantes paulistas, se consolidó en su asentamiento actual como la primera reducción jesuítica exitosa de la región, abriendo el camino para las posteriores fundaciones que marcarían el mapa del Paraguay.
              </p>
              <p>
                Aquí, el encuentro de dos mundos no se impuso únicamente mediante la fuerza, sino que se negoció a través de la música, el urbanismo simétrico y las artes plásticas. El resultado fue un sincretismo extraordinario que transformó la selva paraguaya en un epicentro de producción intelectual, imprentas nativas y talleres artísticos monumentales que asombraron a las cortes europeas de la época.
              </p>
            </div>

            {/* Imagen Destacada Lateral */}
            <div className="lg:col-span-5">
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-stone-200/40 group">
                <img 
                  src={iglesiaSanig} 
                  alt="Torre de San Ignacio Guazú al atardecer" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                
              </div>
            </div>
          </div>

        </div>
      </Section>
      
      <OriginsTimeline />
      
      <BaroqueHighlight />
    </>
  )
}

export default HistoryPage