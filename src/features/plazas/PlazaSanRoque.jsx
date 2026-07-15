import Section from '../../components/ui/Section'

// Imágenes importadas
import PlazaSanRoque1 from '../../assets/images/plazas/plazaSanRoque/plazaSanRoque.jpg'
import PlazaSanRoque2 from '../../assets/images/plazas/plazaSanRoque/sanroque1.jpg'
import PlazaSanRoque3 from '../../assets/images/plazas/plazaSanRoque/sanroque2.jpg'
import PlazaSanRoque4 from '../../assets/images/plazas/plazaSanRoque/sanroque3.jpg'

const PlazaSanRoque = () => {
  const images = [PlazaSanRoque1, PlazaSanRoque2, PlazaSanRoque3, PlazaSanRoque4]

  return (
    <Section bgColor="white" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado de la Plaza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-end">
          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">Histórica y Central</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">Plaza San Roque</h2>
            <div className="w-12 h-[1px] bg-amber-700/50 my-4" />
            <p className="text-stone-600 leading-relaxed font-sans max-w-2xl">
              Un remanso de sombra y tradición donde se respira la vida cotidiana local. Rodeada de árboles frondosos, 
              es el lugar perfecto para descansar, disfrutar de un tereré fresco y contemplar la arquitectura de sus alrededores.
            </p>
          </div>
          <div className="text-stone-500 text-sm border-l border-stone-200 pl-6 space-y-2">
            <p><strong>Ubicación:</strong> Centro de la ciudad</p>
            <p><strong>Ideal para:</strong> Descanso, fotografía, caminatas tranquilas</p>
            <p><strong>Servicios:</strong> Bancos, sombra natural, iluminación led</p>
          </div>
        </div>

        {/* Galería Editorial de Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 h-96 overflow-hidden rounded-lg group shadow-sm">
            <img 
              src={images[0]} 
              alt="Plaza San Roque vista general" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 h-96 md:col-span-1">
            <div className="overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={images[1]} 
                alt="Detalle Plaza San Roque" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group shadow-sm">
              <img 
                src={images[2]} 
                alt="Arboleda Plaza San Roque" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="h-96 overflow-hidden rounded-lg group shadow-sm md:col-span-1">
            <img 
              src={images[3]} 
              alt="Plaza San Roque al atardecer" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PlazaSanRoque