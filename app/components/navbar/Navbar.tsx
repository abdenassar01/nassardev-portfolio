import LogoSVG from "./logo/LogoSVG"
import { LogoLink, Nav, NavbarWrapper, Logo, LinksList, ListItem, StyledNavLink, ContactLink, MobileNavBar, ExtendedMenu, LinksListMobile } from "./style/Styles"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
 
function Navbar() {

    const [ isExtended, setExtended ] = useState(false);

    const ToggleExtendedMenu = () => {
        setExtended(!isExtended);
    }

  return (
    <>
        <NavbarWrapper>
            <LogoLink to="/">
                <Logo>
                   <LogoSVG />
                </Logo>
            </LogoLink>
            <Nav>
                <LinksList>
                    {
                        ["home", "about", "projects", "tools"].map(item => (
                            <ListItem key={ Math.random() * 1000 }>
                                <StyledNavLink to={ item === "home" ? "/" : item }>
                                    { item }
                                </StyledNavLink>
                            </ListItem>
                        ))
                    }     
                </LinksList>
            </Nav>
            <ContactLink to="/contact">
                Contact
            </ContactLink>
        </NavbarWrapper>
        <MobileNavBar>
            <Logo>
                <LogoSVG />
            </Logo>
            <GiHamburgerMenu size={ 35 } color="#00b9ff" onClick={ ToggleExtendedMenu } />
           {
            isExtended && 
            <ExtendedMenu>
                 <Nav>
                <LinksListMobile>
                    {
                        ["home", "about", "projects", "tools"].map(item => (
                            <ListItem key={ Math.random() * 1000 } onClick={ () => setExtended(false) }>
                                <StyledNavLink to={ item === "home" ? "/" : item }>
                                    { item }
                                </StyledNavLink>
                            </ListItem>
                        ))
                    }     
                    <ContactLink to="/contact" onClick={ () => setExtended(false) }>contact</ContactLink>
                </LinksListMobile>
            </Nav>
            </ExtendedMenu>  
           }
        </MobileNavBar>
    </>
      
  )
}

export default Navbar