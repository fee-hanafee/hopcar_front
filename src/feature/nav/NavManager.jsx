import React from "react";
import useRender from "../context/renderProvider";
import useMange from "../context/manageProvider";

function NavManager() {
  const { handleIsAbout } = useRender();
  const { handleMange } = useMange();
  return (
    <div>
      <div>
        <p role="button" className="hover:text-red-600" onClick={handleMange}>
          Manage
        </p>
        <p
          role="button"
          className="hover:text-red-600"
          onClick={() => handleIsAbout({ create: true })}
        >
          Create
        </p>
        <p
          role="button"
          className="hover:text-red-600"
          onClick={() => handleIsAbout({ transaction: true })}
        >
          Transaction
        </p>
        <p
          role="button"
          className="hover:text-red-600"
          onClick={() => handleIsAbout({ user: true })}
        >
          User
        </p>
      </div>
    </div>
  );
}

export default NavManager;
