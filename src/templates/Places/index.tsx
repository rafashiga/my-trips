// import * as S from './styles'

export interface ImageProps {
  url: string
  width: number
  height: number
}

export interface PlacesTemplateProps {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <>
      <h1>{place.name}</h1>
      {place.description && (
        <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      )}
      {place.gallery.map((image, index) => (
        <img src={image.url} alt={place.name} key={`photo-${index}`} />
      ))}
    </>
  )
}

export default PlacesTemplate
