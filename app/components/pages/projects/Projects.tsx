import { motion } from "framer-motion"
import { PROJECTS } from "~/assets/data"
import { MainTitle } from "~/util"
import Item from "./item/Item"
import { Paragraph, ProjectsWrapper } from "./styles/Styles"

function Projects() {

  return (
    <ProjectsWrapper> 
      <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type:"spring", delay: 0.3, damping: 20, stiffness: 50 }} >
        <MainTitle>Projects</MainTitle>
        <Paragraph>
          Everything I do is open source and for the comunity, feel free to see code on my github account. I well apreciate your collaboration on my projects😉.
        </Paragraph>
      </motion.div>
      {
        PROJECTS?.map(ele => <Item key={ Math.random() } title={ ele.title } disc={ ele.disc } code={ ele.code } demo={ ele.demo } image={ ele.image } techStack={ ele.techStack } prglsngs={ ele.prglsngs } />)
      }
      
    </ProjectsWrapper>
  )
}

export default Projects