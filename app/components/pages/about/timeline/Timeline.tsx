import { Heading } from "../shared/Styles"
import { Event, EventList, HelperText, Line, Paragraph, Pin, SubTitle, Text, TimelineWrapper, Wrapper } from "./styles/Styles"

function Timeline() {
  return (
    <Wrapper>
        <Heading>Experiences</Heading>
        <HelperText>
            I am mostly self-taught, but here are some of the most relevant certifications I have achieved:
        </HelperText>
        <TimelineWrapper>
            <Line />
            <EventList>
                <Event >
                    <Paragraph>High School Degree(Baccalauréat)</Paragraph>
                    <SubTitle>Physics Science</SubTitle>
                    <Text>2019</Text>
                    <Pin />
                </Event>
                <Event>
                    <Paragraph>High School Degree(Baccalauréat)</Paragraph>
                    <SubTitle>Physics Science</SubTitle>
                    <Text>2019</Text>
                    <Pin />
                </Event>
                <Event >
                    <Paragraph>High School Degree(Baccalauréat)</Paragraph>
                    <SubTitle>Physics Science</SubTitle>
                    <Text>2019</Text>
                    <Pin />
                </Event>
            </EventList>    
        </TimelineWrapper>
        
    </Wrapper>
  )
}

export default Timeline