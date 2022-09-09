import styled from "styled-components";
import { PrimaryColors } from "./colors";

export const MainTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    background: -webkit-linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen  and (max-width: 667px){
        font-size: 20px;
    }
`

export const SecondaryTitle = styled(MainTitle)`
    font-size: 32px;
    margin: 10px 0;
`