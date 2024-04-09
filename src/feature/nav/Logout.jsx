import React from "react";
import Button from "@mui/material/Button";
import useAuth from "../context/authProvider";

function Logout() {
  const { logout } = useAuth();
  return (
    <div className="w-full py-8 px-4">
      <Button
        variant="outlined"
        color="error"
        sx={{ width: "100%" }}
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
