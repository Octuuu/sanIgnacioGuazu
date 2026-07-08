import React from 'react'
import Section from '../../components/ui/Section'
import MuseumGallery from './MuseumGallery'

// Importaciones de imágenes específicas
import MuseoMunicipal1 from '../../assets/images/museos/museo-municipal/museoMunicipal1.webp'
import MuseoMunicipal2 from '../../assets/images/museos/museo-municipal/museoMunicipal2.webp'
import MuseoMunicipal3 from '../../assets/images/museos/museo-municipal/museoMunicipal3.webp'
import MuseoMunicipal from '../../assets/images/museos/museo-municipal/museoMunicipal4.webp'
import MuseoMunicipal5 from '../../assets/images/museos/museo-municipal/museoMunicipal5.webp'
import MuseoMunicipal6 from '../../assets/images/museos/museo-municipal/museoMunicipal6.webp'
import MuseoMunicipal7 from '../../assets/images/museos/museo-municipal/museoMunicipal7.webp'
import MuseoMunicipal8 from '../../assets/images/museos/museo-municipal/museoMunicipal8.webp'
import MuseoMunicipal9 from '../../assets/images/museos/museo-municipal/museoMunicipal9.webp'
import MuseoMunicipal10 from '../../assets/images/museos/museo-municipal/museoMunicipal10.webp'
import MuseoMunicipal11 from '../../assets/images/museos/museo-municipal/museoMunicipal11.webp'
import MuseoMunicipal12 from '../../assets/images/museos/museo-municipal/museoMunicipal12.webp'
import MuseoMunicipal13 from '../../assets/images/museos/museo-municipal/museoMunicipal13.webp'
import MuseoMunicipal14 from '../../assets/images/museos/museo-municipal/museoMunicipal14.webp'
import MuseoMunicipal15 from '../../assets/images/museos/museo-municipal/museoMunicipal15.webp'

const MunicipalMuseum = () => {
  const imagenes = [
    MuseoMunicipal1, MuseoMunicipal2, MuseoMunicipal3, MuseoMunicipal, 
    MuseoMunicipal5, MuseoMunicipal6, MuseoMunicipal7, MuseoMunicipal8, 
    MuseoMunicipal9, MuseoMunicipal10, MuseoMunicipal11, MuseoMunicipal12, 
    MuseoMunicipal13, MuseoMunicipal14, MuseoMunicipal15
  ]

  return (
    <Section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Encabezado Simétrico */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.25em] text-stone-400 uppercase block mb-3">
            Identidad y Tradición Civil
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal">
            Museo Municipal "Semana Santa"
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4 mb-6" />
          <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed">
            Un espacio dedicado a salvaguardar la memoria colectiva de San Ignacio Guazú. Reúne un valioso compendio de fotografías de época, documentos institucionales de la refundación y los emblemáticos retablos e indumentarias tradicionales que marcan la vivencia anual de nuestra mundialmente reconocida Semana Santa.
          </p>
        </div>

        {/* Galería Completa Reorganizada */}
        <MuseumGallery images={imagenes} />
        
        {/* Cintillo Informativo de Cierre */}
        <div className="mt-16 p-8 bg-stone-50/80 rounded-2xl border border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-stone-800 font-normal">Visitas Institucionales</h4>
            <p className="text-stone-500 text-sm font-light mt-0.5">Acceso libre y recorridos coordinados para delegaciones educativas.</p>
          </div>
          <div className="flex space-x-8">
            <div>
              <p className="text-[10px] font-mono font-medium text-stone-400 uppercase tracking-wider">Horario de Invierno</p>
              <p className="text-sm font-normal text-stone-700">07:00 a 13:00</p>
            </div>
            <div>
              <p className="text-[10px] font-mono font-medium text-stone-400 uppercase tracking-wider">Admisión</p>
              <p className="text-sm font-normal text-stone-700">A voluntad</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default MunicipalMuseum