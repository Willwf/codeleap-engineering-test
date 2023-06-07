import { ChangeEvent, useState } from "react";
import * as Styles from "./styles";

export function UsersPosts() {
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");

  function handleTitleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleContentInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContentInput(event.target.value);
  }

  return (
    <>
      <Styles.Header>
        <Styles.HeaderTitle>CodeLeap Network</Styles.HeaderTitle>
      </Styles.Header>
      <Styles.Main>
        <Styles.Form>
          <Styles.FormTitle>What's on your mind?</Styles.FormTitle>

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

          <Styles.ButtonDiv>
            <Styles.SubmitButton
              disabled={titleInput && contentInput ? false : true}
            >
              Create
            </Styles.SubmitButton>
          </Styles.ButtonDiv>
        </Styles.Form>
      </Styles.Main>
    </>
  );
}
