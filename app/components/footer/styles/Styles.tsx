import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin-top: 40px;
    align-items: center;
    flex-wrap: wrap;
    
    @media screen and (max-width: 667px){
        justify-content: center; 
        flex-direction: column; 
        padding: 0;
    }
`

export const Left = styled.div`
    
`

export const Right = styled.div`
    
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 10px;
`

export const CopyrightText = styled.div`
    color: #2B2B2B;
    font-size: 12px;
`

export const StyledLink = styled.a`
    color : #7a7a7a;

    &:hover{
        color : ${props => props.color ? props.color : "#027AFC" };
    }
`