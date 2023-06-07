import { useState } from "react";
import { SignUp } from "./pages/sign-up";
import { UsersPosts } from "./pages/user-posts";

export function App() {
  const [username, setUsername] = useState<string>("w");

  if (username) {
    return <UsersPosts />;
  }

  return <SignUp setUsername={setUsername} />;
}
