import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Ullamco excepteur labore ullamco enim ullamco. Est elit ut duis enim
          est. Laboris amet deserunt dolor tempor ullamco aliquip duis et ad.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
