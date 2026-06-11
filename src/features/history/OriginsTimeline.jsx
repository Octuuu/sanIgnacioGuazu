import Section from '../../components/ui/Section'

const OriginsTimeline = () => {
  const events = [
    { 
      year: "1609", 
      title: "La Fundación del Origen", 
      description: "El místico jesuita Marcial de Lorenzana y el célebre San Roque González de Santa Cruz fundan formalmente la reducción bajo la advocación de San Ignacio de Loyola. Al ser la primera en el territorio, recibió el apelativo guaraní de 'Guazú' (Grande), sirviendo como modelo urbano, social y legislativo para las veintinueve reducciones posteriores de la cuenca del Plata." 
    },
    { 
      year: "1767", 
      title: "El Ocaso de un Experimento Social", 
      description: "El rey Carlos III firma la Pragmática Sanción decretando la expulsión fulminante de la Compañía de Jesús de todos los territorios de la corona española. Los padres jesuitas abandonan San Ignacio de la noche a la mañana. La administración secular toma el control, iniciando un periodo de decadencia material, saqueos de templos y dispersión de la población indígena hacia la selva." 
    },
    { 
      year: "1993", 
      title: "Rescate del Oro Teológico", 
      description: "Tras siglos de olvido, se consolida la puesta en valor de los antiguos talleres jesuíticos sobrevivientes. Se inaugura de forma definitiva el Museo Diocesano de Arte Sacro en las estructuras originales de los bloques de indios de la reducción. El Estado paraguayo ratifica su protección absoluta, reconociendo a San Ignacio como la capital espiritual de la memoria barroca del país." 
    }
  ]

  return (
    <Section bgColor="stone" className="bg-stone-50 py-24 border-t border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-stone-500 uppercase block mb-3">
            Hitos que forjaron nuestra identidad
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal">
            Línea del Tiempo Ignaciana
          </h2>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4" />
        </div>

        <div className="relative max-w-3xl mx-auto border-l border-stone-200 pl-8 md:pl-16 space-y-16">
          {events.map((event, index) => (
            <div key={index} className="relative group">
              
              {/* Indicador geométrico minimalista */}
              <div className="absolute -left-[39px] md:-left-[71px] top-2 w-4 h-4 rounded-full bg-white border-2 border-amber-800 ring-4 ring-stone-50 group-hover:bg-amber-800 transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
                {/* Año */}
                <span className="font-mono text-2xl font-normal text-amber-800 tracking-wider md:w-24 md:flex-shrink-0">
                  {event.year}
                </span>
                
                {/* Textos extensos */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-stone-900 font-normal tracking-wide">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed text-justify">
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