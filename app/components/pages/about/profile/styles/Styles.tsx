import styled from "styled-components";
import { PrimaryColors } from "~/util";

export const Section = styled.section`
    margin-top: 50px;
`

export const Header = styled.div`
    background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000A61;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 100px;
`

export const MainInfo = styled.div`
    margin-top: 30px;
    display: grid;
    place-items: center;
`

export const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

export const NameHeading = styled.h3`
    font-size: 16px;
    background: -webkit-linear-gradient(30deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
` 

export const SocialMediaLinks = styled.div`
    display: flex;
    margin-top: 5px;
    gap: 10px;
`

export const A = styled.a`
    color: ${ PrimaryColors["100"] };

    &:hover{
        color: ${ PrimaryColors["200"] };
    }
`