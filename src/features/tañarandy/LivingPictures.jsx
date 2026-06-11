import Section from '../../components/ui/Section'
import Taniarandy11 from '../../assets/images/tañarandy/taniarandy11.webp'
import Taniarandy12 from '../../assets/images/tañarandy/taniarandy12.webp'
import Taniarandy13 from '../../assets/images/tañarandy/taniarandy13.webp'
import Taniarandy14 from '../../assets/images/tañarandy/taniarandy14.webp'
import Taniarandy15 from '../../assets/images/tañarandy/taniarandy15.jpg'

const LivingPictures = () => {
  const artImages = [Taniarandy11, Taniarandy12, Taniarandy13, Taniarandy14, Taniarandy15]

  return (
    <Section bgColor="white" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Título Estilo Editorial Lateral */}
          <div className="lg:col-span-4 border-l-[3px] border-amber-800 pl-6 py-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-2">
              Retablos de Carne y Hueso
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight leading-tight">
              Los Cuadros Vivientes en La Barraca
            </h2>
          </div>

          {/* Bloque Explicativo Profundo */}
          <div className="lg:col-span-8 space-y-6 text-stone-600 font-light text-base md:text-lg leading-relaxed text-justify">
            <p>
              El pináculo estético y cultural de la noche se despliega en el anfiteatro natural conocido como <span className="font-medium text-stone-900">"La Barraca"</span>. Aquí, la procesión culmina y da paso a un sobrecogedor espectáculo de estática humana y devoción. Sobre el escenario masivo, los propios labriegos y jóvenes de San Ignacio encarnan con asombrosa precisión pictórica réplicas exactas a escala humana de las obras cumbres del Renacimiento y el Barroco universal.
            </p>
            <p>
              Obras de la talla de <span className="italic">"La Última Cena"</span> de Leonardo da Vinci, la <span className="italic">"Piedad"</span> de Miguel Ángel, o lienzos complejos de Caravaggio y El Greco cobran vida material. Los actores comunitarios permanecen en una inmovilidad absoluta, mística y rigurosa durante extensos minutos bajo un sofisticado juego de iluminación cenital y claroscuros dramáticos. Sus vestuarios son confeccionados enteramente con texturas y pigmentos orgánicos de la zona, convirtiendo el espacio en un museo efímero al aire libre que desafía los sentidos de la multitud de espectadores.
            </p>
          </div>
        </div>

        {/* Galería Asimétrica - Rompiendo el diseño de IA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="h-[230px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm">
              <img src={artImages[0]} alt="Cuadro viviente detalle 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-[230px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm">
              <img src={artImages[1]} alt="Cuadro viviente detalle 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="col-span-2 h-[260px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm">
              <img src={artImages[2]} alt="Representación general" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="h-[240px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm">
              <img src={artImages[3]} alt="Preparación de actores" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="h-[250px] rounded-2xl overflow-hidden border border-stone-200/50 shadow-sm">
              <img src={artImages[4]} alt="La gran barraca escena" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>

        </div>

      </div>
    </Section>
  )
}

export default LivingPictures