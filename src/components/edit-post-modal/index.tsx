import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import * as Styles from "./styles";

interface editPostModalProps {
  fetchPosts(): Promise<void>;
  id: number;
  isEditModalOpen: boolean;
  setisEditModalOpen: Dispatch<SetStateAction<boolean>>;
  ToggleEditModal: () => void;
}

export function EditPostModal(props: editPostModalProps) {
  const { fetchPosts, id, isEditModalOpen, ToggleEditModal } = props;

  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");

  function handleTitleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleContentInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContentInput(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
    };

    await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, requestOptions)
      .then((response) => response.json())
      .then(() => fetchPosts())
      .catch((error) => console.error(error));

    setTitleInput("");
    setContentInput("");
    ToggleEditModal();
  }

  return (
    <Styles.EditFormDiv className={isEditModalOpen ? "" : "hidden"}>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.FormTitle>Edit Item</Styles.FormTitle>

        <Styles.InputDiv>
          <Styles.Label htmlFor="title">Title</Styles.Label>
          <Styles.Input
            id="title"
            type="text"
            name="title"
            placeholder="Hello world"
            value={titleInput}
            onChange={handleTitleInputChange}
          />
        </Styles.InputDiv>

        <Styles.InputDiv>
          <Styles.Label htmlFor="content">Content</Styles.Label>
          <Styles.TextArea
            id="content"
            name="content"
            rows={4}
            placeholder="Content here"
            value={contentInput}
            onChange={handleContentInputChange}
          />
        </Styles.InputDiv>

        <Styles.ButtonsDiv>
          <Styles.CancelButton onClick={ToggleEditModal}>
            Cancel
          </Styles.CancelButton>

          <Styles.SaveButton
            disabled={titleInput && contentInput ? false : true}
            type="submit"
          >
            Save
          </Styles.SaveButton>
        </Styles.ButtonsDiv>
      </Styles.Form>
    </Styles.EditFormDiv>
  );
}
