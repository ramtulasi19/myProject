import styled from "styled-components";

export const FooterContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 1px;
    background: white;

`

export const FooterWrapper = styled.div`
    max-width: 900px;
`

export const FooterH2 = styled.h2`
    font-size: 1.3rem;
    color: black;
    font-weight: 500;
    margin-bottom: 30px;

`

export const FooterLink = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    color: black;
    display: flex;
    transition: all 0.3s;

    &:hover {
        color: #B05FFD;
    }

`