import React from "react";

import useAuth from "../feature/context/authProvider";
import Container from "../feature/auth/Container";
import About from "./About";

function Content() {
  const { authUser } = useAuth();

  return <>{authUser ? <About /> : <Container />}</>;
}

export default Content;
