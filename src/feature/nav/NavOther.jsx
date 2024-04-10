import React from "react";
import useRender from "../context/renderProvider";
import { nanoid } from "nanoid";

const menulist = [
  { list: "Suv" },
  { list: "Mpv" },
  { list: "Sedan" },
  { list: "Van" },
  { list: "Pickup" },
];
function NavOther() {
  const { handleIsAbout } = useRender();
  return (
    <div>
      <div>
        <p
          role="button"
          className="hover:text-red-600"
          onClick={() => handleIsAbout({ profile: true })}
        >
          Profile
        </p>
      </div>
      <div>
        <p
          role="button"
          className="hover:text-red-600"
          onClick={() => handleIsAbout({ car: true })}
        >
          All Car
        </p>
        {menulist.map((el) => (
          <p key={nanoid()} role="button" className="hover:text-red-600">
            {el.list}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavOther;
