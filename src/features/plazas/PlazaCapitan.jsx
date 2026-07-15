import Section from '../../components/ui/Section'

// Se reemplazan las importaciones por las imágenes de Plaza San Roque
import PlazaSanRoque1 from '../../assets/images/plazas/plazaSanRoque/plazaSanRoque.jpg'
import PlazaSanRoque2 from '../../assets/images/plazas/plazaSanRoque/sanroque1.jpg'
import PlazaSanRoque3 from '../../assets/images/plazas/plazaSanRoque/sanroque2.jpg'
import PlazaSanRoque4 from '../../assets/images/plazas/plazaSanRoque/sanroque3.jpg'

const PlazaCapitan = () => {
  // Array de imágenes actualizado
  const images = [PlazaSanRoque1, PlazaSanRoque2, PlazaSanRoque3, PlazaSanRoque4]

  return (
    <Section bgColor="white" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-end">
          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">Cultura y Encuentro</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">Plaza Capitán</h2>
            <div className="w-12 h-[1px] bg-amber-800/50 my-4" />
            <p className="text-stone-600 leading-relaxed font-sans max-w-2xl">
              Homenajeando a nuestra historia, la Plaza Capitán es un espacio icónico reconocido por su ambiente cívico y sus 
              monumentos solemnes. Un punto neurálgico para eventos culturales, ferias vecinales y fines de semana llenos de vida local.
            </p>
          </div>
          <div className="text-stone-500 text-sm border-l border-stone-200 pl-6 space-y-2">
            <p><strong>Ubicación:</strong> Sector Cívico</p>
            <p><strong>Destacado:</strong> Monumentos históricos, anfiteatro al aire libre</p>
            <p><strong>Ideal para:</strong> Eventos culturales, caminatas, historia</p>
          </div>
        </div>

        {/* Galería Alternada de Mosaicos con imágenes de San Roque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-80 overflow-hidden rounded-lg group shadow-sm">
            <img 
              src={images[0]} 
              alt="Plaza Capitán principal" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="h-80 overflow-hidden rounded-lg group shadow-sm">
            <img 
              src={images[1]} 
              alt="Monumento Plaza Capitán" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 h-80">
            <div className="overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={images[2]} 
                alt="Detalle Plaza Capitán" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={images[3]} 
                alt="Atardecer Plaza Capitán" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PlazaCapitan