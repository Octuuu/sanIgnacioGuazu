import Section from '../../components/ui/Section'
import Title from '../../components/ui/Title'

const IntroWords = () => {
  return (
    <Section bgColor="white" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título y subtítulo refinados */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Bienvenidos a nuestra ciudad
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Una joya del Barroco Hispano-Guaraní
          </h2>
          <div className="w-12 h-[2px] bg-amber-700/40 mx-auto mt-6" />
        </div>

        {/* Bloque de texto estilo editorial */}
        <div className="max-w-2xl mx-auto border-l-2 border-stone-100 pl-6 md:pl-8 py-2">
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-sans">
            San Ignacio Guazú, fundada en <span className="font-medium text-stone-900">1609</span>, es una de las reducciones jesuíticas más importantes de América del Sur. 
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-sans mt-4">
            Nuestra ciudad conserva intacto el legado espiritual y cultural del encuentro entre los guaraníes y los padres jesuitas, ofreciendo una experiencia única donde confluyen el arte, la fe y la tradición viva.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default IntroWords