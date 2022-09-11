import styled from "styled-components";
import { PrimaryColors } from "~/util";

export const Heading = styled.h1`
    font-size: 32px;
    font-weight: bold;
    background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 668px) {
        font-size: 20px;
    }
`

export const SecondaryHeading = styled.h2`
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width: 667px) {
        font-size: 14px;
    }
`