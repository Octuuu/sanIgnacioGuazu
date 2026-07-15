import PlazaSanRoque from './PlazaSanRoque'
import PlazaPaikua from './PlazaPaikua'
import PlazaCapitan from './PlazaCapitan'

const PlazaList = () => {
  return (
    <div className="space-y-16 py-12">
      <PlazaSanRoque />
      <PlazaPaikua />
      <PlazaCapitan />
    </div>
  )
}

export default PlazaList