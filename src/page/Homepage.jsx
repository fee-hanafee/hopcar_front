import React from "react";
import { useEffect } from "react";

import * as store from "../utils/local-store";
import Container from "../layout/Container";
import Nav from "../layout/Nav";
import Content from "../layout/Content";
import useAuth from "../feature/context/authProvider";

function Homepage() {
  const { fetchMe } = useAuth();

  useEffect(() => {
    if (store.getToken()) {
      fetchMe();
    }
  }, []);

  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
}

export default Homepage;
