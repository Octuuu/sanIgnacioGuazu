import Section from '../../components/ui/Section'

// Imágenes importadas
import Plazapaikua1 from '../../assets/images/plazas/Plazapaikua/paikua1.png'
import Plazapaikua2 from '../../assets/images/plazas/Plazapaikua/paikua2.png'
import Plazapaikua3 from '../../assets/images/plazas/Plazapaikua/paikua3.png'
import Plazapaikua4 from '../../assets/images/plazas/Plazapaikua/paikua4.png'
import Plazapaikua5 from '../../assets/images/plazas/Plazapaikua/paikua5.png'
import Plazapaikua6 from '../../assets/images/plazas/Plazapaikua/paikua6.png'
import Plazapaikua7 from '../../assets/images/plazas/Plazapaikua/paikua7.png'
import Plazapaikua8 from '../../assets/images/plazas/Plazapaikua/paikua8.png'
import Plazapaikua9 from '../../assets/images/plazas/Plazapaikua/paikua9.png'

// Videos importados
import PaikuaVideo1 from '../../assets/images/plazas/Plazapaikua/videopaikua.mp4'
import PaikuaVideo2 from '../../assets/images/plazas/Plazapaikua/videopaikua2.mp4'

const PlazaPaikua = () => {
  const images = [
    Plazapaikua1, Plazapaikua2, Plazapaikua3, 
    Plazapaikua4, Plazapaikua5, Plazapaikua6, 
    Plazapaikua7, Plazapaikua8, Plazapaikua9
  ]

  return (
    <Section bgColor="white" className="py-16 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado de la Plaza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-end">
          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase">Naturaleza y Recreación</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">Plaza Pa'i Kua</h2>
            <div className="w-12 h-[1px] bg-emerald-800/50 my-4" />
            <p className="text-stone-600 leading-relaxed font-sans max-w-2xl">
              Famosa por su entorno natural y su icónica laguna o vertiente natural. Un espacio vibrante que fusiona la frescura
              del agua con senderos perfectos para ejercitarse, jugar con la familia o simplemente desconectar de la rutina urbana.
            </p>
          </div>
          <div className="text-stone-500 text-sm border-l border-stone-200 pl-6 space-y-2">
            <p><strong>Ubicación:</strong> Zona residencial natural</p>
            <p><strong>Destacado:</strong> Vertiente de agua, senderos ecológicos</p>
            <p><strong>Ideal para:</strong> Deportes, juegos infantiles, atardeceres</p>
          </div>
        </div>

        {/* Sección de Videos en Primer Plano */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
            <video 
              src={PaikuaVideo1} 
              controls 
              className="w-full h-full object-cover"
              poster={Plazapaikua1}
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
            <video 
              src={PaikuaVideo2} 
              controls 
              className="w-full h-full object-cover"
              poster={Plazapaikua5}
            />
          </div>
        </div>

        {/* Mosaico Amplio de 9 Imágenes */}
        <h3 className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4 text-center">
          Galería Fotográfica de Pa'i Kua
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-lg group shadow-sm ${
                idx === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-44'
              }`}
            >
              <img 
                src={img} 
                alt={`Plaza Pa'i Kua foto ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default PlazaPaikua