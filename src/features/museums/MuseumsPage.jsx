import Section from '../../components/ui/Section'
import DiocesanMuseum from './DiocesanMuseum'
import CulturalPoints from './CulturalPoints'

const MuseumsPage = () => {
  return (
    <>
      {/* Encabezado General */}
      <Section bgColor="white" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Arte sacro y memoria viva
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
            Museos y Espacios Culturales
          </h1>
          <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
        </div>
      </Section>
      
      {/* Secciones de Contenido */}
      <DiocesanMuseum />
      
      <CulturalPoints />
    </>
  )
}

export default MuseumsPage