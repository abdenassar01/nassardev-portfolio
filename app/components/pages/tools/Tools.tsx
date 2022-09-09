import { TOOLS, WORKFLOWS } from '~/assets/data'
import { MainTitle, SecondaryTitle } from '~/util'
import Item from './item/Item'
import { CentredWrapper, Paragraph, Wrapper } from './styles/Styles'

function Tools() {
  return (
    <CentredWrapper>
      <Wrapper>
        <MainTitle>Tools</MainTitle>
        <Paragraph>
          This is a list of tech equipment I currently use for my day-to-day work as a software developer.
        </Paragraph>
        <SecondaryTitle>IDEs and Text Editors</SecondaryTitle>
        {
          TOOLS?.map(ele => <Item key={ Math.random() } avatar={ ele.avatar } disc={ ele.disc } toolsName={ ele.toolsName } /> )
        }
        <SecondaryTitle>Workflow</SecondaryTitle>
        {
          WORKFLOWS?.map(ele => <Item key={ Math.random() } avatar={ ele.avatar } disc={ ele.disc } toolsName={ ele.toolsName } /> )
        }
      </Wrapper>
    </CentredWrapper>
  )
}

export default Tools