const DishCard = ({ name, description, index }) => {
  return (
    <div className="bg-stone-50/50 border border-stone-200/40 rounded-2xl p-6 transition-colors duration-300 hover:bg-stone-50">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-serif text-lg text-stone-900 font-normal tracking-wide">
          {name}
        </h3>
        <span className="font-mono text-[10px] text-amber-800/60 font-medium">
          0{index + 1}
        </span>
      </div>
      <p className="text-stone-500 font-light text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default DishCard