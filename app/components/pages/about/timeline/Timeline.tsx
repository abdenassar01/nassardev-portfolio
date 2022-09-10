import { Heading } from "../shared/Styles"
import { Event, EventList, HelperText, Line, Paragraph, Pin, SubTitle, Text, TimelineWrapper, Wrapper } from "./styles/Styles"

type Event = {
    dateRange?: string,
    degree?: string,
    title: string  
}

type Data = {
    heading: string,
    helperText?: string,
    events: Event[]
}

type PropType = {
    data: Data
}

function Timeline(props: PropType) {
  return (
    <Wrapper>
        <Heading>{ props?.data.heading }</Heading>
        <HelperText>
         { props?.data.helperText }
        </HelperText>
        <TimelineWrapper>
            <Line />
            <EventList>
                {
                    props?.data.events.map(ele => 
                   ( <Event key={ Math.random() }>
                        <Paragraph>{ ele?.degree }</Paragraph>
                        <SubTitle>{ ele.title }</SubTitle>
                        <Text>{ ele.dateRange }</Text>
                        <Pin />
                    </Event>)
                    )
                }
            </EventList>    
        </TimelineWrapper>
        
    </Wrapper>
  )
}

export default Timeline