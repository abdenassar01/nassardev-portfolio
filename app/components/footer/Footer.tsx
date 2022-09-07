import { CopyrightText, FooterWrapper, Left, Right, SocialMedia, StyledLink } from "./styles/Styles"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <FooterWrapper>
        <Left>
          <CopyrightText>
            &copy; 2001-2022 AbdeNassar Amimi
          </CopyrightText>
        </Left>
        <Right>
          <SocialMedia>
            <StyledLink href="https://github.com" target="_blank" color="#171515">
              <AiFillGithub size={ 26 } />
            </StyledLink> 
            <StyledLink href="https://linkedin.com" target="_blank" color="#0077B5">
              <AiFillLinkedin size={ 26 } />
            </StyledLink> 
            <StyledLink href="https://instagram.com" target="_blank" color="#C13584">
              <AiOutlineInstagram size={ 26 } />
            </StyledLink> 
            <StyledLink href="https://twitter.com" target="_blank" color="#1D9BF0">
              <AiFillTwitterCircle size={ 26 } />
            </StyledLink>
          </SocialMedia>
        </Right>
    </FooterWrapper>
  )
}

export default Footer