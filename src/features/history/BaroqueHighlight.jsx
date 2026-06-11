import Section from '../../components/ui/Section'
import Taniarandy from '../../assets/images/tañarandy/fondoTaniarandy.jpeg'

const BaroqueHighlight = () => {
  return (
    <Section bgColor="white" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-800 uppercase block mb-3">
            La sinergia espiritual y estética
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            El Universo del Barroco Hispano-Guaraní
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-5" />
        </div>

        {/* Bloque 1: Contenido en Grid de Arquitectura y Arte Sacro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          <div className="border-t border-stone-200/80 pt-8 space-y-4">
            <span className="text-xs font-mono text-amber-800/80 block">01 / ESPACIO Y GEOMETRÍA</span>
            <h3 className="text-2xl font-serif text-stone-900 font-normal">Arquitectura y Trazado Misionero</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base text-justify">
              El plano urbano de San Ignacio Guazú sentó las bases operativas de las misiones: una gran plaza central rectangular, el imponente complejo del templo, el colegio y los talleres artesanales ocupando el frente principal, y las hileras de viviendas indígenas organizadas simétricamente en manzanas modulares. 
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-sm text-justify">
              Aunque los bombardeos históricos y el paso del tiempo derribaron el gran templo original, los bloques de adobe prensado, las tejas estampadas a mano y los cimientos de piedra remanentes nos hablan de una infraestructura diseñada para albergar a miles de almas en perfecta armonía comunitaria.
            </p>
          </div>

          <div className="border-t border-stone-200/80 pt-8 space-y-4">
            <span className="text-xs font-mono text-amber-800/80 block">02 / ICONOGRAFÍA Y MATERIA</span>
            <h3 className="text-2xl font-serif text-stone-900 font-normal">Imaginería Sacra y Tallas en Madera</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base text-justify">
              Las esculturas policromadas que hoy se custodian en el Museo Diocesano representan la cúspide artística de la región. Bajo la dirección técnica de maestros europeos, los artesanos guaraníes moldearon la madera de cedro nativo imprimiéndole su propia sensibilidad estética.
            </p>
            <p className="text-stone-600 font-light leading-relaxed text-sm text-justify">
              Los rostros de santos y vírgenes ignacianos no copian la palidez del viejo mundo; poseen rasgos nativos sutiles, pómulos marcados y miradas cargadas de un misticismo profundo y contemplativo. Es un arte vivo tallado con hachas y gubias que transformó el dogma teológico en poesía visual latinoamericana.
            </p>
          </div>

        </div>

        {/* Bloque 2: Banner Editorial Inferior (Tradición Viva) */}
        <div className="relative rounded-2xl overflow-hidden h-[350px] bg-stone-950 border border-stone-900 group">
          <img 
            src={Taniarandy} 
            alt="Tradición viva de Tañarandy" 
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent" />
          
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl space-y-4">
            <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
              Continuidad Histórica
            </span>
            <h4 className="text-2xl md:text-3xl font-serif text-white font-normal">
              La Herencia que se niega a morir
            </h4>
            <p className="text-stone-300 font-light text-xs md:text-sm leading-relaxed text-justify">
              La herencia de San Ignacio Guazú no quedó congelada en las vitrinas de un museo. Late con fuerza cada año en la procesión de Tañarandy y se manifiesta en las manos de los escultores contemporáneos que siguen trabajando la madera en los mismos talleres de sus antepasados, demostrando que la fe, el arte y la tierra roja siguen siendo un único elemento indisoluble.
            </p>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default BaroqueHighlight