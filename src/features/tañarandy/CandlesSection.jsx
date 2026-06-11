import Section from '../../components/ui/Section'
import { Flame } from 'lucide-react'
import Taniarandy6 from '../../assets/images/tañarandy/taniarandy6.jpg'
import Taniarandy7 from '../../assets/images/tañarandy/taniarandy7.jpg'
import Taniarandy8 from '../../assets/images/tañarandy/taniarandy8.webp'
import Taniarandy9 from '../../assets/images/tañarandy/taniarandy9.webp'
import Taniarandy10 from '../../assets/images/tañarandy/taniarandy10.webp'

const CandlesSection = () => {
  const routeImages = [Taniarandy6, Taniarandy7, Taniarandy8, Taniarandy9, Taniarandy10]

  return (
    <Section bgColor="stone" className="bg-stone-50 py-24 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-800 uppercase block mb-3">
            El Sendero Iluminado por la Fe Popular
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight">
            Los Candiles de Apepú y el Yvága Rape
          </h2>
          <div className="w-12 h-[1px] bg-amber-700/30 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6 text-stone-600 font-light text-base md:text-lg leading-relaxed text-justify">
            <p>
              Al desvanecerse la última luz del crepúsculo del Viernes Santo, da inicio el rito del <span className="font-medium text-stone-900">Yvága Rape (Camino al Cielo)</span>. Se trata de un trayecto de aproximadamente tres kilómetros de camino vecinal de tierra roja que es transformado por completo en una alfombra destellante de fuego. Los pobladores locales preparan minuciosamente, con meses de anticipación, más de <span className="font-medium text-stone-900">20,000 candiles artesanales</span> utilizando como cuenco la cáscara vaciada del apepú (naranja agria nativa), rellena de grasa vacuna y una mecha de lienzo de algodón texturizado.
            </p>
            <p>
              Paralelamente, se clavan a ambos lados del sinuoso sendero miles de antorchas construidas a base de tacuara seca, delimitando la ruta sagrada. A lo largo de este místico sendero avanza la desgarradora procesión de la <span className="italic">Virgen de la Dolorosa</span>, cuya imagen colonial es transportada a hombros. El andar es custodiado e impregnado de una atmósfera conmovedora por los <span className="font-medium text-stone-900">Estacioneros</span>, grupos de hombres que entonan los ancestrales *purahéi jahe'o* (cantos lastimeros y lamentos), una tradición de canto coral de origen prehispánico y colonial que eriza la piel de los peregrinos en la absoluta penumbra de las misiones.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-stone-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 mb-5 border border-amber-200/40">
                <Flame className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-stone-400 uppercase mb-1">
                ORGANIZACIÓN COMUNITARIA
              </span>
              <h3 className="font-serif text-xl text-stone-900 font-normal mb-3">
                Patrimonio Inmaterial
              </h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                Cada candil es encendido individualmente a mano por familias del lugar al unísono de la primera campana, preservando una tecnología tradicional ecológica y autóctona paraguaya.
              </p>
            </div>
          </div>
        </div>

        {/* Galería Fotográfica Horizontal del Camino de Luces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {routeImages.map((img, index) => (
            <div key={index} className="group relative h-[300px] rounded-2xl overflow-hidden border border-stone-200/40 shadow-sm bg-stone-900">
              <img 
                src={img} 
                alt={`Procesión candiles ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-[0.7]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default CandlesSection