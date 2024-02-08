import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }

`

export const FooterWrapper = styled.div`
    max-width: 900px;
`

export const FooterH2 = styled.h2`
    font-size: 1.3rem;
    color: black;
    font-weight: 500;

`

export const FooterLink = styled.a`
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.9rem;
    text-decoration: none;
    color: black;
    display: flex;
    transition: all 0.3s;

    &:hover {
        color: #B05FFD;
    }

`