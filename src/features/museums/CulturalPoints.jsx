import Section from '../../components/ui/Section'

const CulturalPoints = () => {
  const points = [
    {
      title: "Casa de la Cultura",
      desc: "Espacio dedicado a exposiciones artísticas temporales, talleres comunitarios y fomento de la literatura y música local."
    },
    {
      title: "Talleres de Artesanía",
      desc: "Centros de producción viva donde los artesanos locales preservan técnicas tradicionales de tallado y cestería guaraní."
    },
    {
      title: "Centro de Interpretación",
      desc: "Un recorrido audiovisual e histórico interactivo diseñado para comprender el impacto sociopolítico de las reducciones."
    }
  ]

  return (
    <Section bgColor="white" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase block mb-3">
            Otros espacios culturales
          </span>
          <h2 className="text-3xl font-serif text-stone-900 font-normal">
            Puntos de Interés Cultural
          </h2>
        </div>

        {/* Grid de Tarjetas Minimalistas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-stone-50/50 border border-stone-200/40 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-stone-50"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-800/60 font-semibold block mb-2 tracking-widest">
                  ESPACIO // 0{index + 1}
                </span>
                <h3 className="font-serif text-lg text-stone-900 font-normal mb-3 tracking-wide">
                  {point.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default CulturalPoints