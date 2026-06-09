import Section from '../../components/ui/Section'

const BaroqueHighlight = () => {
  return (
    <Section bgColor="white" className="py-20 bg-stone-50/50 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Fusión única de culturas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Barroco Hispano-Guaraní
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4" />
        </div>

        {/* Bloques de contenido en Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Bloque 1: Arquitectura */}
          <div className="border-t border-stone-200/60 pt-6">
            <span className="text-xs font-mono text-amber-700/70 block mb-2">01 / ESPACIO</span>
            <h3 className="text-2xl font-serif text-stone-900 mb-4 font-normal">Arquitectura Misionera</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
              El trazado urbano de San Ignacio Guazú sigue el esquema clásico jesuítico. Aunque el templo original ya no se mantiene en pie, los talleres y las estructuras supervivientes reflejan la imponente escala y organización de la primera reducción guaraní.
            </p>
          </div>

          {/* Bloque 2: Arte Sacro */}
          <div className="border-t border-stone-200/60 pt-6">
            <span className="text-xs font-mono text-amber-700/70 block mb-2">02 / LEGADO</span>
            <h3 className="text-2xl font-serif text-stone-900 mb-4 font-normal">Arte Sacro y Tallas</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
              Las increíbles esculturas en madera policromada creadas por las manos guaraníes bajo guía jesuita revelan una interpretación única del barroco europeo. Estas obras, vivas y cargadas de misticismo local, constituyen uno de los tesoros artísticos más importantes de América.
            </p>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default BaroqueHighlight