import styled from "styled-components";
import { PrimaryColors } from "~/util";

export const ItemWrapper = styled.div`
    margin: 20px 0;
    padding: 10px 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 10px;

    background: #f1f1f1;

    &:nth-child(2n){
        flex-direction: row-reverse;
    }
`

export const TechTitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
    background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const ItemEllement = styled.div`
    width: 55%;

    @media screen and (max-width: 668px) {
        width: 100%;
    }
`

export const ProjectTitle = styled.h2`
    background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Paragraph = styled.p`
    width: 100%;
    margin: 10px 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const Image = styled.img`
    width: 43%;
    height: auto;
    border-radius: 10px;

    @media screen and (max-width: 668px) {
        width: 100%;
    }
`

export const TechnologiesWrapper = styled.div`
    
`

export const Technology = styled.div`
    padding: 5px 0;
    display: flex;
    gap: 5px;
    align-items: center;
`

export const Avatar = styled.img`
    width: 20px;
    height: auto;
`

export const TechLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${ props => props.color  };
`