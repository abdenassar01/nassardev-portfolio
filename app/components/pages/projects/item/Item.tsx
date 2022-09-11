import { Avatar, Image, ItemEllement, ItemWrapper, Paragraph, ProjectTitle, TechLink, TechnologiesWrapper, Technology, TechTitle } from "./styles/Styles"

import { ProjectProps } from "../../../../assets/data"

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
        </ItemEllement>
        <Image src="https://i.imgur.com/Wx9gCVq.jpg" alt="casawe-guichet" />
    </ItemWrapper>
  )
}

export default Item