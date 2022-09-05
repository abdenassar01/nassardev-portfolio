import { Link, NavLink } from "@remix-run/react";
import styled from "styled-components";
import { PrimaryColors } from "~/util/colors";

export const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
`

export const LogoLink = styled(Link)`
    text-decoration: none;
`

export const Logo = styled.div`
    color:  ${ PrimaryColors["100"] }; 
    font-weight: 900;
    //TODO: To add Image Logo
`

export const Nav = styled.nav`
    
`

export const LinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;   
` 

export const ListItem = styled.li`
    padding: 0 10px;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    
    &[aria-current="page"] {
        color: green;
    }
`

export const ContactLink = styled(Link)`
    text-decoration: none;
    color:  ${ PrimaryColors["200"] } ; //TODO: Refactor to match the dark/light Theme
    font-weight: 500;
    padding: 5px 20px;
    border-radius: 50px;
    border: 2px solid ${ PrimaryColors["200"] } ;
`