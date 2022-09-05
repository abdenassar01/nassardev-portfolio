import { Link } from "@remix-run/react";
import styled from "styled-components";
import { PrimaryColors } from "./colors";

export const Button = styled(Link)`
    text-decoration: none;
    padding: 12px 42px;
    color: ${ props => props.color ? props.color : "black" };

    &:visited{
        color: ${ props => props.color ? props.color : "black" };
    }
`

export const PrimaryButton = styled(Button)`
    color: white;
    background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    border-radius: 50px;
    font-weight: bold;

    &:hover{
        background: linear-gradient(30deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    }
`

export const SecondaryButton = styled(Button)`
    font-weight: bold;

    &:hover{
        background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;

        &::after{
            content: "";
            display: block;
            border-radius: 50px;
            background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);;
            height: 3px;
            position: absolute;
            left: -20px;
            animation: slide .3s forwards;
        }
        @keyframes slide {
            from{
                width: 0%;
            }
            to{
                width: 100px;
                /* width: 100%; */
            }
        }
    }
`