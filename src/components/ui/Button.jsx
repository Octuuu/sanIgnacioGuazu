import clsx from 'clsx'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-amber-700 text-white hover:bg-amber-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-amber-700 text-amber-700 hover:bg-amber-50'
  }

  return (
    <button
      className={clsx(
        'px-6 py-2 rounded-md font-medium transition-colors duration-200',
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