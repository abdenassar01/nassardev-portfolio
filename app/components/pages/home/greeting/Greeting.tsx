import { motion } from "framer-motion"
import {  MainTitle, PrimaryButton, PrimaryColors, SecondaryButton } from "~/util"
import { Section, P, Wrapper, ButtonsWrapper } from "./styles/Styles"

function Greeting() {
  return (
    <motion.div animate={{x: 0}} initial={{x: -500}} exit={{ x: -200, opacity: 0 }}>
      <Wrapper>
        <Section>
              Hi š I'm
              <MainTitle>Abdenassar Amimi</MainTitle>
              <P>
                Iām a full stack developer from morocco š²š¦ who is passionate about using technology šØāš» to empower people šØāš«šš»āāļø.
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