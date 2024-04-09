import React from "react";
import useRender from "../context/renderProvider";

function NavOther() {
  const { handleIsAbout } = useRender();
  return (
    <div>
      <div>
        <p onClick={() => handleIsAbout({ profile: true })}>Profile</p>
      </div>
      <div>
        <p onClick={() => handleIsAbout({ car: true })}>All Car</p>
        <p>Suv</p>
        <p>Mpv</p>
        <p>Sedan</p>
        <p>Van</p>
        <p>Pickup</p>
      </div>
    </div>
  );
}

export default NavOther;
