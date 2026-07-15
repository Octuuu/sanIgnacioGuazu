import Section from '../../components/ui/Section'

const OutdoorSpots = () => {
  const spots = [
    {
      title: "Senderos de la Reserva",
      desc: "Perfecto para caminatas ecológicas y observación de avifauna nativa.",
      tag: "Aventura"
    },
    {
      title: "Paseo de las Flores",
      desc: "Un sendero urbano decorado de forma estacional ideal para fotografías de retrato.",
      tag: "Fotografía"
    },
    {
      title: "Ciclovía Municipal",
      desc: "Circuito pavimentado y seguro para recorrer de punta a punta en bicicleta o rollers.",
      tag: "Deportes"
    }
  ]

  return (
    <Section bgColor="white" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase block mb-3">
            Otras Alternativas
          </span>
          <h2 className="text-3xl font-serif text-white">Explora el Aire Libre</h2>
          <p className="text-stone-400 mt-2 text-sm">
            Además de nuestras plazas principales, descubre otros espacios diseñados para conectar con el entorno y mantenerte en movimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spots.map((spot, idx) => (
            <div 
              key={idx} 
              className="border border-stone-800 p-8 rounded-lg bg-stone-900/50 hover:border-amber-700/50 transition-colors"
            >
              <span className="text-xs font-mono text-amber-500 tracking-wider uppercase">
                {spot.tag}
              </span>
              <h3 className="text-xl font-serif text-white mt-2 mb-3">{spot.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{spot.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default OutdoorSpots