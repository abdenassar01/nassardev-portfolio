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
                <Technology>
                    <Avatar src="https://i.imgur.com/cWDVsJ8.png" alt="" />
                    <TechLink href="https://remix.com" target="_blank" color="#14d3f5">React</TechLink>
                </Technology>
            </TechnologiesWrapper>
        </ItemEllement>
        <Image src="https://i.imgur.com/Wx9gCVq.jpg" alt="casawe-guichet" />
    </ItemWrapper>
  )
}

export default Item