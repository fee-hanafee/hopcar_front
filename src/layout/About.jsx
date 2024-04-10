import React from "react";
import useRender from "../feature/context/renderProvider";
import Profile from "../feature/user/Profile";
import Cars from "../feature/user/Cars";
import Create from "../feature/manager/Create";
import User from "../feature/manager/User";

function About() {
  const { isAbout } = useRender();
  return (
    <div className="h-full ">
      {isAbout?.profile && <Profile />}
      {isAbout?.car && <Cars />}
      {isAbout?.create && <Create />}
      {isAbout?.user && <User />}
    </div>
  );
}

export default About;
