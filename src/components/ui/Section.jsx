import clsx from 'clsx'
import Container from './Container'

const Section = ({ children, className, bgColor = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    amber: 'bg-amber-50'
  }

  return (
    <section className={clsx('py-16', bgColors[bgColor], className)}>
      <Container>{children}</Container>
    </section>
  )
}

export default Section