import React from "react";
import CardUser from "../../component/CardUser";
import useMange from "../context/manageProvider";
import { useEffect } from "react";
import { nanoid } from "nanoid";

function User() {
  const { fetchUser, user } = useMange();

  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <div className="p-8">
      <div className="flex  flex-wrap justify-center gap-8">
        {user && user.map((el) => <CardUser key={nanoid()} user={el} />)}
      </div>
    </div>
  );
}

export default User;
