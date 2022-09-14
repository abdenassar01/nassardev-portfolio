import { AiFillDribbbleCircle, AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai"
import { A, Header, Image, MainInfo, NameHeading, Section, SocialMediaLinks } from "./styles/Styles"

import { motion } from "framer-motion";

function Profile() {
  return (
    <Section>
      <Header 
        initial={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 100, bounce: 10 }} 
        whileInView={{ opacity: 1 }}
        >
        <MainInfo>
          <Image
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 2.5 }}
            transition={{ type: "spring", duration: 0.5, stiffness: 100, bounce: 10 }} 
            src="https://i.imgur.com/t8Z6gHr.png" alt="ABDENASSAR AMIMI" />
          <NameHeading>ABDENASSAR AMIMI</NameHeading>
          <SocialMediaLinks>
            <A href="https://github.com/abdenassar01" target="_blank">
              <AiFillGithub size={ 20 } /> 
            </A> 
            <A href="https://linkedin.com/in/abdenassar01" target="_blank">
              <AiFillLinkedin size={ 20 } /> 
            </A> 
            <A href="https://instagram.com/nassardev" target="_blank">
              <AiOutlineInstagram size={ 20 } /> 
            </A> 
            <A href="https://twitter.com/abdenassar01" target="_blank">
              <AiFillTwitterCircle size={ 20 } /> 
            </A> 
            <A href="https://facebook.com/abdenassar01" target="_blank">
              <AiFillFacebook size={ 20 } /> 
            </A> 
            <A href="https://dribbble.com/abdenassar01" target="_blank">
              <AiFillDribbbleCircle size={ 20 } /> 
            </A>
          </SocialMediaLinks>
        </MainInfo>
      </Header>
    </Section>
  )
}

export default Profile