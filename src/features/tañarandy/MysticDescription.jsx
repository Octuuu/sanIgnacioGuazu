import Section from '../../components/ui/Section'

const MysticDescription = () => {
  return (
    <Section bgColor="stone" className="bg-stone-950 py-28 border-t border-b border-stone-900 select-none">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="w-2 h-2 rounded-full bg-amber-500 mx-auto mb-8 shadow-xl shadow-amber-500/80 animate-pulse" />
        
        <p className="text-2xl md:text-3xl font-serif italic text-stone-100 font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
          "En Tañarandy, el barro de la tierra roja, la cera derretida y el aroma de los frutos cítricos se funden al caer el sol para recordarnos que la espiritualidad de un pueblo también se esculpe con arte."
        </p>
        
        <div className="w-12 h-[1px] bg-stone-800 mx-auto mt-10" />
      </div>
    </Section>
  )
}

export default MysticDescription