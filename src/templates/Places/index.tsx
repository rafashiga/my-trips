import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

export interface ImageProps {
  url: string
  width: number
  height: number
}

export interface PlacesTemplateProps {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

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
              <Image
                width={1000}
                height={600}
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
