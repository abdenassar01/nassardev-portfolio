import { PROJECTS } from "~/assets/data"
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
      {
        PROJECTS?.map(ele => <Item key={ Math.random() } title={ ele.title } disc={ ele.disc } code={ ele.code } demo={ ele.demo } image={ ele.image } techStack={ ele.techStack } prglsngs={ ele.prglsngs } />)
      }
      
    </ProjectsWrapper>
  )
}

export default Projects