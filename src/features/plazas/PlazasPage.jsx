import Section from '../../components/ui/Section'
import PlazaList from './PlazaList'
import OutdoorSpots from './OutdoorSpots'

const PlazasPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Encabezado General Editorial */}
      <Section bgColor="white" className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Espacios urbanos y naturaleza
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
            Plazas y Espacios Públicos
          </h1>
          <p className="mt-4 text-stone-600 font-serif italic text-lg max-w-xl mx-auto">
            Lugares de encuentro, historia y frescura natural en el corazón de nuestra comunidad.
          </p>
          <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
        </div>
      </Section>
      
      {/* Listas de plazas */}
      <PlazaList />
      
      {/* Otros puntos de interés al aire libre */}
      <OutdoorSpots />
    </div>
  )
}

export default PlazasPage