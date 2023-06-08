import styled from "styled-components";
import * as Styles from "../../styles/variables";


export const DeleteModal = styled.div`
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
`

export const DeleteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 660px;
  height: 146px;
  padding: 24px;

  border-radius: 16px;
  border: 1px solid ${Styles.lightGray};
  background-color: ${Styles.white};
`
export const DeleteModalTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
`
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`

export const Button = styled.button`
  width: 120px;
  height: 32px;

  background-color: ${Styles.white};
  border: 1px solid ${Styles.lightGray};
  border-radius: 8px;

  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
`

export const CancelButton = styled(Button)``

export const DeleteButton = styled(Button)`
  color: ${Styles.white};
  background-color: ${Styles.red};
  border: none;
`