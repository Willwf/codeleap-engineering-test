import { ChangeEvent, useEffect, useState } from "react";
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

  // const [id, setId] = useState<number>()
  // const [username, setUsername] = useState<string>()
  // const [createdTime, setCreatedTime] = useState<Date>()
  // const [title, setTitle] = useState<string>()
  // const [content, setContent] = useState<string>()

  function handleTitleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleInput(event.target.value);
  }

  function handleContentInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContentInput(event.target.value);
  }

  useEffect(() => {
    fetch("https://dev.codeleap.co.uk/careers/")
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data.results);
      });
  }, []);

  console.log(postsData);

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
