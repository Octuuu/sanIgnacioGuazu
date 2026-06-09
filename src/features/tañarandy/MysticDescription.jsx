import Section from '../../components/ui/Section'

const MysticDescription = () => {
  return (
    <Section bgColor="stone" className="bg-stone-950 py-24 border-t border-b border-stone-900 select-none">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Detalle visual superior que emula una llama de candil */}
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mx-auto mb-6 shadow-lg shadow-amber-500/50" />
        
        <p className="text-xl md:text-2xl font-serif italic text-stone-200 font-light leading-relaxed tracking-wide">
          "Tañarandy es más que una manifestación cultural; es una experiencia profundamente espiritual donde el arte y la fe popular se funden para encender la noche."
        </p>
        
        <div className="w-8 h-[1px] bg-stone-700 mx-auto mt-8" />
      </div>
    </Section>
  )
}

export default MysticDescription