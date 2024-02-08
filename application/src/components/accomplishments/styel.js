import styled from "styled-components";

export const AccompContainer = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: #B05FFD;
    padding: 50px 0;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }

`

export const AccompH1 = styled.h1`
    font-size: 2.5rem;
    color: #B05FFD;;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`