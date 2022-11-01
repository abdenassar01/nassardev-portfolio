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

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

  return (
    <Wrapper>
        <Heading>{ props?.data.heading }</Heading>
        <HelperText>
         { props?.data.helperText }
        </HelperText>
        <TimelineWrapper>
            <Line />
            <EventList 
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ type: "spring", stiffness: 100 }}
            >
                {
                    props?.data.events.map(ele =>  ( 
                        <Event key={ Math.random() }  
                            variants={item} 
                        >
                            <Paragraph>{ ele?.degree }</Paragraph>
                            <SubTitle>{ ele.title }</SubTitle>
                            <Text>{ ele.dateRange }</Text>
                            <Pin />
                        </Event>
                    ))
                }
            </EventList>    
        </TimelineWrapper>
        
    </Wrapper>
  )
}

export default Timeline