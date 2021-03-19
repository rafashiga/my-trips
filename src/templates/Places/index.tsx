// import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

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
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          {place.description && (
            <S.Body
              dangerouslySetInnerHTML={{ __html: place.description.html }}
            />
          )}
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <img src={image.url} alt={place.name} key={`photo-${index}`} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
