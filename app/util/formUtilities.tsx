import styled from "styled-components";
import { PrimaryColors } from "./colors";


export const Field = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #747474;
`

export const Label = styled.label`
    font-size: 10px;
    font-weight: bold;
    color: #A4A4A4;
    margin-top: 5px;
    margin-left: 5px;
`

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
    caret-color: white;
    color: white;
    font-weight: bold;

    &:focus{
        outline: none;
    }
`

export const TextArea = styled.textarea`
    border: none;
    outline: none;
    background-color: transparent;
    caret-color: white;
    color: white;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 5px;

    &:focus{
        outline: none;
    }

`

export const Submit = styled.input`
    padding: 12px 52px;
    border-radius: 10px;
    color: white;
    border: none;
    font-weight: bold;
    background: linear-gradient(90deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    transition: all 1s ease-in;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`