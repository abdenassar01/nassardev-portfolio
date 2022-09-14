import { Avatar, ButtonsWrapper, CodeButton, DemoButton, Image, ItemEllement, ItemWrapper, LanguagesWrapper, Paragraph, ProjectTitle, TechLink, TechnologiesWrapper, Technology, TechTitle } from "./styles/Styles"

import { ProjectProps } from "../../../../assets/data"
import { FaFirefoxBrowser, FaFileCode } from "react-icons/fa"

function Item(props: ProjectProps) {
  return (
    <ItemWrapper>
        <ItemEllement>
            <ProjectTitle>{ props.title }</ProjectTitle>
            {
                props.disc.map( ele => <Paragraph key={ Math.random() }>{ ele }</Paragraph> )
            }

            <TechTitle>Tech Stack</TechTitle>
            <TechnologiesWrapper>
                {
                    props.techStack?.map(tech => (
                        <Technology key={ Math.random() }>
                            <Avatar src={ tech.avatar } alt={ tech.title } />
                            <TechLink href={ tech.link } target="_blank" color={ tech.color }>{ tech.title }</TechLink>
                        </Technology>
                    ))
                }   
            </TechnologiesWrapper> 
            <TechTitle>Programming Languages</TechTitle>
            <LanguagesWrapper>
                {
                    props.prglsngs?.map(lang => (
                        <Technology key={ Math.random() }>
                            <TechLink href={ lang.link } target="_blank" ><Avatar src={ lang.avatar } alt={ lang.name } /></TechLink>
                        </Technology>
                    ))
                }    
            </LanguagesWrapper>
            <ButtonsWrapper>
                <CodeButton href={ props.code } color="white" target="_blank">code <FaFileCode /> </CodeButton>
                <DemoButton href={ props.demo } color="#036afb" target="_blank">demo <FaFirefoxBrowser /> </DemoButton>
            </ButtonsWrapper>
        </ItemEllement>
        <Image src={ props.image } alt={ props.title } loading="lazy" />
    </ItemWrapper>
  )
}

export default Item