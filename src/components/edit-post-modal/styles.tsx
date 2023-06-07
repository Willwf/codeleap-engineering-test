import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const EditFormDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: ${Styles.mediumGrayOpac};

  &.hidden {
    display: none;
  }
`;

export const Form = styled.form`
  width: 660px;

  background-color: ${Styles.white};
  border: 1px solid ${Styles.lightGray};
  border-radius: 16px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FormTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const Label = styled.label`
  font-size: 1.6rem;
`;
export const Input = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid ${Styles.mediumGray};
  border-radius: 8px;

  padding: 8px;

  &:focus {
    border: 2px solid ${Styles.mediumGray};
  }

  &::placeholder {
    color: ${Styles.alabaster};
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;

  border: 1px solid ${Styles.mediumGray};
  border-radius: 8px;

  padding: 8px;

  &:focus {
    border: 2px solid ${Styles.mediumGray};
  }

  &::placeholder {
    color: ${Styles.alabaster};
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

export const CancelButton = styled.div`
  width: 120px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${Styles.darkGray};
  border-radius: 8px;
  background-color: ${Styles.white};

  &:focus {
    border: 2px solid ${Styles.darkGray};
  }
`;

export const SaveButton = styled.button`
  width: 120px;
  height: 32px;

  border-radius: 8px;

  background-color: ${Styles.white};
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;

  color: ${Styles.white};
  background-color: ${Styles.green};
  border: none;

  &:focus {
    border: 2px solid ${Styles.darkGray};
  }

  &:disabled {
    background-color: ${Styles.lightGray};
  }
`;
