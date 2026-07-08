import React from 'react'
import Section from '../../components/ui/Section'
import DiocesanMuseum from './DiocesanMuseum'
import MunicipalMuseum from './MunicipalMuseum'
import ViedmaMuseum from './ViedmaMuseum'
import CulturalPoints from './CulturalPoints'

const MuseumsPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen antialiased">
      {/* Encabezado Editorial */}
      <Section bgColor="white" className="py-28 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-800 uppercase block mb-4">
            Arte Sacro, Arqueología y Memoria Viva
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight font-normal leading-none">
            Museos y Espacios <br />Culturales
          </h1>
          <div className="w-16 h-[1px] bg-amber-800/30 mx-auto mt-8" />
        </div>
      </Section>
      
      {/* Secuencia Curada de Contenidos */}
      <DiocesanMuseum />
      <MunicipalMuseum />
      <ViedmaMuseum />
      <CulturalPoints />
    </div>
  )
}

export default MuseumsPage