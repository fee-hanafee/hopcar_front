import React from "react";
import useRender from "../context/renderProvider";

function NavManager() {
  const { handleIsAbout } = useRender();
  return (
    <div>
      <div>
        <p onClick={() => handleIsAbout({ manage: true })}>Manage</p>
        <p onClick={() => handleIsAbout({ create: true })}>Create</p>
        <p onClick={() => handleIsAbout({ transaction: true })}>Transaction</p>
        <p onClick={() => handleIsAbout({ user: true })}>User</p>
      </div>
    </div>
  );
}

export default NavManager;
