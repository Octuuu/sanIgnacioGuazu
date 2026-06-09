import Section from '../../components/ui/Section'

const OriginsTimeline = () => {
  const events = [
    { year: "1609", title: "Fundación", description: "San Roque González de Santa Cruz y el padre Marcial de Lorenzana fundan la reducción de San Ignacio Guazú, marcando el inicio de la era jesuítica." },
    { year: "1767", title: "Expulsión de la Orden", description: "El rey Carlos III decreta la expulsión de los jesuitas de todos los dominios españoles, dejando las reducciones bajo administración secular." },
    { year: "1993", title: "Patrimonio Histórico", description: "Se consolida el valor arquitectónico y cultural de sus tesoros artísticos y se ratifica su protección como patrimonio histórico del Paraguay." }
  ]

  return (
    <Section bgColor="stone" className="bg-stone-50 py-20 border-t border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase block mb-3">
            Hitos importantes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal">
            Línea de Tiempo
          </h2>
        </div>

        {/* Contenedor de la línea */}
        <div className="relative max-w-2xl mx-auto border-l border-stone-200 pl-6 md:pl-10 space-y-12">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              
              {/* Círculo indicador de la línea (Efecto minimalista) */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-white border border-amber-700 ring-4 ring-stone-50 group-hover:bg-amber-700 transition-colors duration-300" />
              
              {/* Contenido del evento */}
              <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-6">
                <span className="font-mono text-lg font-semibold text-amber-800 tracking-wider md:w-20 md:flex-shrink-0">
                  {event.year}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-stone-900 font-medium mb-1.5 tracking-wide">
                    {event.title}
                  </h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default OriginsTimeline