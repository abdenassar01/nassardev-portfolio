import styled from "styled-components";


export const CentredWrapper = styled.main`
    display: flex;
    justify-content: center;
    min-height: 83vh;
`

export const Wrapper = styled.div`
    margin-top: 50px;
    padding: 0 40px;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

export const Paragraph = styled.p`
    padding: 20px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`