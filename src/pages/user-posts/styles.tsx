import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const Header = styled.main`
  width: 800px;
  height: 80px;

  background-color: ${Styles.blue};

  display: flex;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  color: ${Styles.white};
  font-size: 2.2rem;
  font-weight: 700;

  margin-left: 37px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 800px;

  background-color: ${Styles.white};
  padding: 24px;
`;
export const Form = styled.form`
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

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 32px;

  background-color: ${Styles.blue};
  border: none;
  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${Styles.white};
  cursor: pointer;

  &:disabled {
    background-color: ${Styles.lightGray};
  }

  &:focus {
    border: 2px solid ${Styles.darkGray};
  }
`;
