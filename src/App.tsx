import { useState } from "react";
import { SignUp } from "./pages/sign-up";
import { UsersPosts } from "./pages/user-posts";

export function App() {
  const [loggedUser, setLoggedUser] = useState<string>("");

  if (loggedUser) {
    return <UsersPosts loggedUser={loggedUser} />;
  }

  return <SignUp setLoggedUser={setLoggedUser} />;
}
