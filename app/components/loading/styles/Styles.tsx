import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: grid;
    place-items: center;

    background-color: #1818188d;
`

export const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &::after{
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #036afb;
        border-color: #036afb transparent #036afb transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`