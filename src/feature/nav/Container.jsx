import React from "react";
import useAuth from "../context/authProvider";
import NavManager from "./NavManager";
import NavOther from "./NavOther";
import Logout from "./Logout";

function Container() {
  const { authUser } = useAuth();

  return (
    <div className="flex flex-col justify-between min-h-[700px] ">
      {authUser && (
        <>
          <div className="font-mono p-4 flex flex-col gap-8">
            <NavOther />
            {authUser?.role == "Manager" && <NavManager />}
          </div>
         <Logout />
        </>
      )}
    </div>
  );
}

export default Container;
