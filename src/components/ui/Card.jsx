import clsx from 'clsx'

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={clsx('w-full h-48 object-cover', className)} />
)

export const CardContent = ({ children, className }) => (
  <div className={clsx('p-6', className)}>{children}</div>
)

export const CardTitle = ({ children, className }) => (
  <h3 className={clsx('text-xl font-semibold mb-2', className)}>{children}</h3>
)

export const CardDescription = ({ children, className }) => (
  <p className={clsx('text-gray-600', className)}>{children}</p>
)

export default Card