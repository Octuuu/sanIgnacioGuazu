import Section from '../../components/ui/Section'
import MapContainerComponent from './MapContainer'

const MapPage = () => {
  return (
    <>
      {/* Encabezado Editorial */}
      <Section bgColor="white" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Cartografía e itinerarios misioneros
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
            Mapa Interactivo
          </h1>
          <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
        </div>
      </Section>

      {/* Contenedor del Mapa */}
      <Section bgColor="stone" className="bg-stone-50/40 pb-24">
        <div className="max-w-5xl mx-auto px-4">
          
          <MapContainerComponent />
          
          {/* Nota al pie informativa */}
          <div className="mt-8 max-w-2xl mx-auto text-center">
            <p className="text-stone-400 font-light text-xs leading-relaxed">
              El mapa indexa los monumentos históricos de la antigua reducción de San Ignacio Guazú fundada en 1609. Utiliza el panel lateral para centrar la visual directamente en los complejos culturales o trazar rutas de navegación en tiempo real.
            </p>
          </div>

        </div>
      </Section>
    </>
  )
}

export default MapPage;