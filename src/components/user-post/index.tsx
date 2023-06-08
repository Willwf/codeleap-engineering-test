import * as Styles from "./styles";
import { useState } from "react";
import { EditPostModal } from "../edit-post-modal";
import { DeleteModal } from "../delete-modal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import edit from "../../assets/edit-icon.svg";
import trash from "../../assets/trash-icon.svg";

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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setisEditModalOpen] = useState<boolean>(false);

  function ToggleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function ToggleEditModal() {
    setisEditModalOpen(!isEditModalOpen);
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
          <Styles.IconButton onClick={ToggleEditModal}>
            <Styles.Iconimg
              src={edit}
              alt="Icon of a pen from an edit button"
            />
          </Styles.IconButton>
        </Styles.IconsDiv>

        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          ToggleDeleteModal={ToggleDeleteModal}
          fetchPosts={fetchPosts}
          id={id}
        />

        <EditPostModal
          setisEditModalOpen={setisEditModalOpen}
          isEditModalOpen={isEditModalOpen}
          fetchPosts={fetchPosts}
          id={id}
          ToggleEditModal={ToggleEditModal}
        />
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
