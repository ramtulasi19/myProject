import styled from "styled-components";

export const SigninContainer = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    padding: 50px 0;
    color: white;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }

`

export const SigninWrapper = styled.div`
    background: #fff;
    min-height: 700px;
    width: 500px;
    max-width: 90%;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`

export const SigninP = styled.p`
    font-weight: 600;
    margin-bottom: 5px;

`

export const SigninInput = styled.input`
    width: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    border: solid gray 1px;
    margin-bottom: 30px;

`

export const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`