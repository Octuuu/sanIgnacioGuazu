import Section from '../../components/ui/Section'
import DishCard from './DishCard'
import { traditionalDishes } from '../../data/restaurants'

const TraditionalDishes = () => {
  return (
    <Section bgColor="white" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase block mb-3">
            Platos típicos
          </span>
          <h2 className="text-3xl font-serif text-stone-900 font-normal">
            Comidas Tradicionales
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-4" />
        </div>

        {/* Grid de Platos Tradicionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {traditionalDishes.map((dish, index) => (
            <DishCard 
              key={index} 
              index={index}
              name={dish.name} 
              description={dish.description} 
            />
          ))}
        </div>

      </div>
    </Section>
  )
}

export default TraditionalDishes