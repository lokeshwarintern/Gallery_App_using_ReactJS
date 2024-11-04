import './index.css'

const ThumbnailItem = props => {
  const {eachImageItem, changeImageItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImageItem

  const changeImage = () => {
    changeImageItem(id)
  }

  const imageClassName = isActive ? 'is-active-img' : null
  return (
    <li>
      <button type="button" className="btn-ele" onClick={changeImage}>
        <img
          className={`img-ele ${imageClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
