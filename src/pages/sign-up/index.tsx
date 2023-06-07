import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import * as Styles from "./styles";

interface SignUpProps {
  setLoggedUser: Dispatch<SetStateAction<string>>;
}

export function SignUp(props: SignUpProps) {
  const { setLoggedUser } = props;
  const [usernameInput, setUsernameInput] = useState<string>("");

  function handleUsernameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUsernameInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");

    if (username !== null) {
      setLoggedUser(username.toString());
    }
  }

  return (
    <Styles.SignUpForm onSubmit={handleSubmit}>
      <Styles.SignUpTitle>Welcome to CodeLeap network!</Styles.SignUpTitle>

      <Styles.SignUpInputDiv>
        <Styles.SignUpLabel htmlFor="username">
          Please enter your username
        </Styles.SignUpLabel>
        <Styles.SignUpInput
          id="username"
          type="text"
          name="username"
          placeholder="John doe"
          value={usernameInput}
          onChange={handleUsernameInputChange}
        />
      </Styles.SignUpInputDiv>

      <Styles.ButtonDiv>
        <Styles.SignUpButton disabled={usernameInput ? false : true}>
          Enter
        </Styles.SignUpButton>
      </Styles.ButtonDiv>
    </Styles.SignUpForm>
  );
}
