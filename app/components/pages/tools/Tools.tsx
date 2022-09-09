import { MainTitle, SecondaryTitle } from '~/util'
import Item from './item/Item'
import { Paragraph, Wrapper } from './styles/Styles'

function Tools() {
  return (
    <Wrapper>
        <MainTitle>Tools</MainTitle>
        <Paragraph>

        </Paragraph>
        <SecondaryTitle>IDEs and Text Editors</SecondaryTitle>
        <Item avatar='' disc='something about text' />
    </Wrapper>
  )
}

export default Tools