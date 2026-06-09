import clsx from 'clsx'

const Title = ({ children, subtitle, className }) => {
  return (
    <div className={clsx('text-center mb-12', className)}>
      <h2 className="section-title">{children}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default Title