import React from "react";
import useRender from "../feature/context/renderProvider";
import Profile from "../feature/user/Profile";
import Cars from "../feature/user/Cars";
import Create from "../feature/manager/Create";
import User from "../feature/manager/User";
import Manage from "../feature/manager/Manage";

function About() {
  const { isAbout } = useRender();
  return (
    <div>
      {isAbout?.profile && <Profile />}
      {isAbout?.car && <Cars />}
      {isAbout?.create && <Create />}
      {isAbout?.user && <User />}   
      {isAbout?.manage && <Manage />}
    </div>
  );
}

export default About;
