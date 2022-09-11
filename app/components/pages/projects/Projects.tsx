import { MainTitle } from "~/util"
import Item from "./item/Item"
import { Paragraph, ProjectsWrapper } from "./styles/Styles"

function Projects() {
  return (
    <ProjectsWrapper> 
      <MainTitle>Projects</MainTitle>
      <Paragraph>
        Everything I do is open source and for the comunity, feel free to see code on my github account. I well apreciate your collaboration on my projects😉.
      </Paragraph>
      <Item />
    </ProjectsWrapper>
  )
}

export default Projects