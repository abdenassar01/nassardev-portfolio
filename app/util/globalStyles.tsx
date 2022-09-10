import { createGlobalStyle } from "styled-components";
import { PrimaryColors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-style: 16px;
    }

    //    
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #cbddf7;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: linear-gradient(180deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    }
`