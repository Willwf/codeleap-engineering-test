import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as Styles from "./styles";
import { UserPost } from "../../components/user-post";

interface userPostsProps {
  loggedUser: string;
}

interface PostData {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export function UsersPosts(props: userPostsProps) {
  const { loggedUser } = props;

  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");

  const [postsData, setPostsData] = useState<PostData[]>([]);

  function handleTitleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleContentInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContentInput(event.target.value);
  }

  async function fetchPosts() {
    await fetch("https://dev.codeleap.co.uk/careers/")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loggedUser,
        title: formData.get("title"),
        content: formData.get("content"),
      }),
    };

    await fetch("https://dev.codeleap.co.uk/careers/", requestOptions)
      .then((response) => response.json())
      .then(() => fetchPosts())
      .catch((error) => console.error(error));

    setTitleInput("");
    setContentInput("");
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Styles.Header>
        <Styles.HeaderTitle>CodeLeap Network</Styles.HeaderTitle>
      </Styles.Header>
      <Styles.Main>
        <Styles.Form onSubmit={handleSubmit}>
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

        {postsData.map((postData) => {
          return (
            <UserPost
              key={postData.id}
              loggedUser={loggedUser}
              id={postData.id}
              username={postData.username}
              createdDate={postData.created_datetime}
              title={postData.title}
              content={postData.content}
            />
          );
        })}
      </Styles.Main>
    </>
  );
}
