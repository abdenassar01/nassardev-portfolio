import { Avatar, Image, ItemEllement, ItemWrapper, Paragraph, ProjectTitle, TechLink, TechnologiesWrapper, Technology, TechTitle } from "./styles/Styles"

function Item() {
  return (
    <ItemWrapper>
        <ItemEllement>
            <ProjectTitle>casawe-guichet</ProjectTitle>
            <Paragraph>
                Online ticketing platform for tickets and Sport Ticketing for sports events.
            </Paragraph>
            <Paragraph>
                This application is part of the guichet.ma platform which is a web application and mobile application for online ticket booking.               
            </Paragraph>

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