import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const SignUpForm = styled.form`
  background-color: ${Styles.white};

  width: 100%;
  max-width: 500px;

  border: 1px solid ${Styles.alabaster};
  border-radius: 16px;
  padding: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  grid-column: 2;

`


export const SignUpTitle = styled.h1`
  font-size: 2.2rem;
`

export const SignUpInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 24px;
  margin-bottom: 16px;
`

export const SignUpLabel = styled.label`
  font-size: 1.6rem;
`

export const SignUpInput = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid ${Styles.mediumGray};
  border-radius: 8px;

  padding: 8px;

  &:focus {
    border: 2px solid ${Styles.mediumGray}
  }

  &::placeholder {
    color: ${Styles.alabaster};
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`

export const SignUpButton = styled.button`
  width: 111px;
  height: 32px;

  background-color: ${Styles.blue};
  border: none;
  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${Styles.white};
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    background-color: ${Styles.lightGray};
  }

  &:focus {
    border: 2px solid ${Styles.darkGray}
  }

`
