import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const UserPostArticle = styled.article`
  border: 1px solid ${Styles.lightGray};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
`

export const PostTitleDiv = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 16px 16px 0 0;
  padding: 0 24px;

  background-color: ${Styles.blue};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PostTitle = styled.h2`
  color: ${Styles.white};
  font-size: 2.2rem;
  font-weight: 700;
`

export const IconsDiv = styled.div`
  display: flex;
  gap: 20px;

  &.hidden {
    display: none;
  }
`
export const IconButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`
export const Iconimg = styled.img`
  width: 30px;
`

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

export const ArticleDiv = styled.div`
  padding: 24px;

`
export const UsernamePostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

`
export const Username = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${Styles.mediumGray}
`
export const CreatedDate = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${Styles.mediumGray}

`
export const PostText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${Styles.black}
`
