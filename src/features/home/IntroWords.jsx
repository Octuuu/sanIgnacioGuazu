import Section from '../../components/ui/Section'
import Title from '../../components/ui/Title'

const IntroWords = () => {
  return (
    <Section bgColor="white" className="py-30">
      <div className="max-w-3xl mx-auto text-center px-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
          Bienvenidos a nuestra tierra
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal mb-6">
          Una joya viva del Barroco Hispano-Guaraní
        </h1>
        <div className="w-12 h-[1px] bg-amber-700/30 mx-auto mb-8" />
        <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-4">
          Fundada en 1609 como la <strong className="font-medium text-stone-900">primera reducción jesuítica</strong> de las misiones, San Ignacio Guazú es el origen de una historia fascinante en América del Sur.
        </p>
        <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-4">
          Nuestra ciudad custodia el legado del encuentro entre el pueblo guaraní y los padres jesuitas. Aquí, el misticismo, la tierra roja y la tradición viva confluyen en una experiencia única tallada en arte, fe y memoria.
        </p>
      </div>
    </Section>
  )
}

export default IntroWords