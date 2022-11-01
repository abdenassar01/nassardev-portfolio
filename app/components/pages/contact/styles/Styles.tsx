import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactWrapper = styled.main`
    padding: 0 40px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 73vh;
`

export const LeftSide = styled.section`
    
    @media screen and (max-width: 667px) {
        display: flex;
        justify-content: center;
        transform: scale(.9);
    }
`

export const RightSide = styled(motion.section)`
    
    @media screen and (max-width: 667px) {
        width: 100%;
    }
`

export const Illustration = styled.div`

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Raw = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

export const SubmitField = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ErrorMessage = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    background-color: #ff0644;
    padding: 2px 5px;
    border-radius: 5px;
`