import React from "react";
import useRender from "../context/renderProvider";
import Login from "./Login";
import Register from "./Register";
import Spinner from "../../component/Spinner";
import { useState } from "react";

function Container() {
  const { isShow } = useRender();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="h-full">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {isShow?.login && <Login />}
          {isShow?.register && <Register />}
        </>
      )}
    </div>
  );
}

export default Container;
