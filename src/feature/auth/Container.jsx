import React from "react";
import useRender from "../context/renderProvider";
import Login from "./Login";
import Register from "./Register";

function Container() {
  const { isShow } = useRender();

  return (
    <div className="h-full">
      {isShow?.login && <Login />}
      {isShow?.register && <Register />}
    </div>
  );
}

export default Container;
