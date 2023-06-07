import * as Styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import edit from "../../assets/edit-icon.svg";
import trash from "../../assets/trash-icon.svg";
import { useState } from "react";

interface UserPostProps {
  loggedUser: string;
  id: number;
  username: string;
  createdDate: string;
  title: string;
  content: string;
  fetchPosts(): Promise<void>;
}

export function UserPost(props: UserPostProps) {
  const { loggedUser, id, username, createdDate, title, content, fetchPosts } =
    props;

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function ToggleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  async function DeletePost() {
    await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE",
    }).then(() => {
      ToggleDeleteModal();
      fetchPosts();
    });
  }

  return (
    <Styles.UserPostArticle id={`${id}`}>
      <Styles.PostTitleDiv>
        <Styles.PostTitle>{title}</Styles.PostTitle>

        <Styles.IconsDiv className={username === loggedUser ? "" : "hidden"}>
          <Styles.IconButton onClick={ToggleDeleteModal}>
            <Styles.Iconimg
              src={trash}
              alt="Icon of a trash can from a delete button"
            />
          </Styles.IconButton>
          <Styles.IconButton>
            <Styles.Iconimg
              src={edit}
              alt="Icon of a pen from an edit button"
            />
          </Styles.IconButton>
        </Styles.IconsDiv>

        <Styles.DeleteModal className={isDeleteModalOpen ? "" : "hidden"}>
          <Styles.DeleteDiv>
            <Styles.DeleteModalTitle>
              Are you sure you want to delete this item?
            </Styles.DeleteModalTitle>
            <Styles.ButtonsDiv>
              <Styles.CancelButton onClick={ToggleDeleteModal}>
                Cancel
              </Styles.CancelButton>
              <Styles.DeleteButton onClick={DeletePost}>
                Delete
              </Styles.DeleteButton>
            </Styles.ButtonsDiv>
          </Styles.DeleteDiv>
        </Styles.DeleteModal>
      </Styles.PostTitleDiv>

      <Styles.ArticleDiv>
        <Styles.UsernamePostDiv>
          <Styles.Username>@{username}</Styles.Username>
          <Styles.CreatedDate>
            {dayjs(createdDate).fromNow()}
          </Styles.CreatedDate>
        </Styles.UsernamePostDiv>

        <Styles.PostText>{content}</Styles.PostText>
      </Styles.ArticleDiv>
    </Styles.UserPostArticle>
  );
}
