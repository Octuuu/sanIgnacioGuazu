import Section from '../../components/ui/Section'
import { restaurants } from '../../data/restaurants'
import { Clock, MapPin, Utensils } from 'lucide-react'

const RestaurantList = () => {
  return (
    <Section bgColor="stone" className="bg-stone-50/60 py-20 border-t border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Restaurantes recomendados
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-normal tracking-tight">
            Guía Gastronómica
          </h2>
        </div>

        {/* Grid de Restaurantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="bg-white border border-stone-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-colors duration-300 hover:bg-stone-50/30"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-800/70 font-semibold block mb-1 tracking-widest uppercase">
                  {restaurant.type}
                </span>
                
                <h3 className="font-serif text-xl text-stone-900 font-normal mb-4 tracking-wide">
                  {restaurant.name}
                </h3>
                
                {/* Bloque de Especialidades */}
                <div className="pt-3 border-t border-stone-100 mb-5">
                  <div className="flex items-center space-x-2 text-stone-400 mb-2">
                    <Utensils className="h-3.5 w-3.5 text-amber-700/60" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Especialidades</span>
                  </div>
                  <p className="text-stone-700 font-light text-sm pl-5 leading-relaxed">
                    {restaurant.specialties.join(", ")}
                  </p>
                </div>
              </div>

              {/* Detalles Técnicos de Dirección y Horarios */}
              <div className="space-y-2 pt-4 border-t border-stone-100 text-stone-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-500 font-light text-xs">
                    {restaurant.address}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                  <p className="font-mono text-[11px] tracking-wide">
                    {restaurant.schedule}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default RestaurantList