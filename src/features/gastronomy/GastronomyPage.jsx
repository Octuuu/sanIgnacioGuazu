import Section from '../../components/ui/Section'
import RestaurantList from './RestaurantList'
import TraditionalDishes from './TraditionalDishes'

const GastronomyPage = () => {
  return (
    <>
      {/* Encabezado Principal */}
      <Section bgColor="white" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase block mb-3">
            Sabores tradicionales de la tierra guaraní
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal">
            Dónde Comer en San Ignacio
          </h1>
          <div className="w-16 h-[1px] bg-amber-700/30 mx-auto mt-6" />
        </div>
      </Section>
      
      {/* Componentes modulares */}
      <RestaurantList />
      
      <TraditionalDishes />
    </>
  )
}

export default GastronomyPage