import Section from '../../components/ui/Section'

const LivingPictures = () => {
  return (
    <Section bgColor="white" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Título lateral */}
          <div className="md:col-span-1 border-l-2 border-amber-700 pl-5 py-1">
            <span className="text-xs font-semibold tracking-[0.15em] text-amber-800 uppercase block mb-1">
              Teatro Viviente
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 font-normal tracking-tight">
              Cuadros Vivientes
            </h2>
          </div>

          {/* Bloque descriptivo */}
          <div className="md:col-span-2 space-y-4 text-stone-600 font-light text-base leading-relaxed">
            <p>
              Una de las expresiones más impactantes de la noche ocurre en la mítica barraca, donde se representan réplicas exactas de famosas obras pictóricas y escultóricas de la historia del arte universal.
            </p>
            <p>
              Actores de la comunidad permanecen rigurosamente inmóviles bajo luces dramáticas y vestuarios cuidados, logrando una representación estática que conmueve profundamente a miles de peregrinos y visitantes del país y el mundo.
            </p>
          </div>

        </div>

      </div>
    </Section>
  )
}

export default LivingPictures