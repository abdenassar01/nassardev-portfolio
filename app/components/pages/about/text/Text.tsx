import { Heading, SecondaryHeading } from '../shared/Styles'
import { Paragraph, Wrapper } from './styles/Styles'

function Text() {
  return (
    <Wrapper
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5, stiffness: 100, bounce: 10 }} 
    >
        <Heading>Hey, I'm Abdenassar Amimi</Heading>
        <SecondaryHeading>FullStack Web Developer from Morocco 👨‍💻🇲🇦 </SecondaryHeading>
        <Paragraph>
          Hard-working listing programmer with a flair for creating elegant solutions in the least amount of time. As a student developer, created a lot of side projects to improve upon the skills I gained from school and develop new ones on my own. 
        </Paragraph>
        <Paragraph>
          I'm a 21 years old full stack developer based in morocco. my intrest is in efficenty and making my code as clean as possible, as maintanable as possible to be able to work on large projects with a big teams very easily. I'm motivated to learn more in the programming field.
        </Paragraph>
        <Paragraph>
          Looking to use my programming skills to help solve tech related problems and provide solutions that suits clients needs. 
        </Paragraph>
    </Wrapper>
  )
}

export default Text