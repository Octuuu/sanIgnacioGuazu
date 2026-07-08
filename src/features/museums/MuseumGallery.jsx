import React from 'react'

const MuseumGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden rounded-xl group cursor-pointer border border-stone-200 bg-stone-100 aspect-square
            ${index % 6 === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto md:h-full' : ''}`}
        >
          <img 
            src={img} 
            alt={`Registro fotográfico ${index + 1}`} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  )
}

export default MuseumGallery