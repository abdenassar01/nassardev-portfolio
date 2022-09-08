import styled from "styled-components";
import { PrimaryColors } from "~/util";

export const Wrapper = styled.section`
    padding: 0 60px;
    margin-top: 40px;
`

export const HelperText = styled.p`
    font-size: 14px;
`

export const TimelineWrapper = styled.div`
    position: relative;   
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(30deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    margin-top: 100px;
`

export const EventList = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Event = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -63px;


    &:nth-child(2){
        flex-direction: column-reverse;
        margin-top: -5px;
    }
`

export const Pin = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(300deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
`

export const Text = styled.p`
    background: -webkit-linear-gradient(30deg, ${ PrimaryColors["100"] } 10%, ${ PrimaryColors["200"] } 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
`

export const SubTitle = styled.p`
    font-weight: 700;
`

export const Paragraph = styled.p`
    
`