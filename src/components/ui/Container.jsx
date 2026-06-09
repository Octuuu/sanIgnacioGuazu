import clsx from 'clsx'

const Container = ({ children, className }) => {
  return (
    <div className={clsx('container-custom', className)}>
      {children}
    </div>
  )
}

export default Container