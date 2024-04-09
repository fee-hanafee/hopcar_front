import React from "react";

import useAuth from "../feature/context/authProvider";
import Container from "../feature/auth/Container";


function Content() {
  const { authUser } = useAuth();

  return <>{authUser ? null : <Container />}</>;
}

export default Content;
