import { Link } from "@remix-run/react";
import styled from "styled-components";
import { PrimaryColors } from "./colors";

export const Button = styled(Link)`
    text-decoration: none;
    color: ${ props => props.color ? props.color : "black" };
    padding: 5px 42px;

    &:visited{
        color: ${ props => props.color ? props.color : "black" };
    }

    @media screen  and (max-width: 667px){
        font-size: 14px;
    }
`

export const PrimaryButton = styled(Button)`
    background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    border-radius: 50px;
    font-weight: bold;
    object-fit: contain;

    &:hover{
        background: linear-gradient(30deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    }
`

export const SecondaryButton = styled(Button)`
    font-weight: bold;
    display: block;
    width: fit-content;

    &::after{
        content: "";
        display: block;
        border-radius: 50px;
        background: transparent;
        height: 3px;
    }

    &:hover{
        background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
       
        &::after{
            content: "";
            display: block;
            border-radius: 50px;
            background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
            height: 3px;
            animation: slide .3s forwards;
        }
        @keyframes slide {
            from{
                width: 0%;
            }
            to{
                width: 110%;
            }
        }
    }
`