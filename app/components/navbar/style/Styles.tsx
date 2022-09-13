import { Link, NavLink } from "@remix-run/react";
import styled from "styled-components";
import { PrimaryColors } from "~/util";

export const NavbarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;

    @media screen and ( max-width: 786px ){
        display: none; 
    }
`

export const LogoLink = styled(Link)`
    text-decoration: none;
`

export const Logo = styled.div`
    color:  ${ PrimaryColors["100"] }; 
    font-weight: 900;
    width: 30px;
    height: 30px;
`

export const Nav = styled.nav`
    padding-top: 10px;
`

export const LinksList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;   
` 

export const ListItem = styled.li`
    padding: 0 10px;
   
    @media screen and (max-width: 767px) {
        padding: 5px;
        
       &:hover{
            color: white;
            background-color: #036afb9b;
       }
    }
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    color: black;

    &[aria-current="page"] {
        background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
       
        &::after{
            content: "";
            display: block;
            border-radius: 50px;
            background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);;
            height: 3px;
            width: 120%;
            animation: slide .3s forwards;
        }
        @keyframes slide {
            from{
                width: 0%;
            }
            to{
                width: 120%;
            }
        }
    }

    &:hover{
        background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:visited{
        color: black;

        @media screen and (max-width: 767px) {
            color: white;
        }
    }
`

export const ContactLink = styled(Link)`
    text-decoration: none;
    color:  ${ PrimaryColors["200"] }; 
    font-weight: 500;
    padding: 5px 20px;
    border-radius: 50px;
    border: 2px solid ${ PrimaryColors["200"] };

    @media screen and (max-width: 767px) {
        width: fit-content;
    }
`

export const MobileNavBar = styled(NavbarWrapper)`
   display: none;

   @media screen and (max-width: 767px) {
    display: flex;
   }
`

export const ExtendedMenu = styled.div`
    width: 100vw;
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 50px;
    background-color: #000000bc;
    padding-bottom: 10px;
`

export const LinksListMobile = styled(LinksList)`
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`