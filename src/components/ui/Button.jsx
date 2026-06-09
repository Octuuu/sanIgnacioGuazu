import clsx from 'clsx'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-amber-800 text-stone-50 hover:bg-amber-900 border border-transparent shadow-sm',
   
    secondary: 'bg-stone-100 text-stone-800 hover:bg-stone-200/80 border border-stone-200/40',
    
    outline: 'border border-stone-300 text-stone-800 hover:bg-stone-50 hover:border-stone-400'
  }

  return (
    <button
      className={clsx(
        'px-5 py-2.5 rounded-full font-serif text-sm font-normal tracking-wide ',
        
        'outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none [-webkit-tap-highlight-color:transparent]',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button