import { motion } from "framer-motion"
import {  MainTitle, PrimaryButton, PrimaryColors, SecondaryButton } from "~/util"
import { Section, P, Wrapper, ButtonsWrapper } from "./styles/Styles"

function Greeting() {
  return (
    <motion.div animate={{x: 0}} initial={{x: -500}}>
      <Wrapper>
        <Section>
              Hi 👋 I'm
              <MainTitle>Abdenassar Amimi</MainTitle>
              <P>
                I’m a full stack developer from morocco  who is passionate about using technology to empower people.
              </P>
          </Section>
          <ButtonsWrapper>
            <PrimaryButton to="/contact" color="white">Hire Me</PrimaryButton>
            <SecondaryButton to="/about" color={ PrimaryColors["200"] }>About Me</SecondaryButton>
          </ButtonsWrapper>
      </Wrapper>
    </motion.div>
    
    
  )
}

export default Greeting