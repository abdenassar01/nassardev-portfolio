import styled from "styled-components";

export const AlertWrapper = styled.div`
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: ${ props => props.status ? "#01944f" : "#ec0d62" };
`

export const Message = styled.p`
    color: white;
    font-weight: bold;
`