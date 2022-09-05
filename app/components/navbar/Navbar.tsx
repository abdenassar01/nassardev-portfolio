import { LogoLink, Nav, NavbarWrapper, Logo, LinksList, ListItem, StyledNavLink, ContactLink } from "./style/Styles"

function Navbar() {
  return (
    <NavbarWrapper>
        <LogoLink to="/">
            <Logo>A</Logo>
        </LogoLink>
        <Nav>
            <LinksList>
                {
                    ["home", "about", "projects", "tools"].map(item => (
                        <ListItem>
                            <StyledNavLink to={ item === "home" ? "/" : item }>
                                {item}
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
  )
}

export default Navbar