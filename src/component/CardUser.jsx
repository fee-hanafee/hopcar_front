import React from "react";

function CardUser({ user }) {
  console.log(user);
  return (
    <div className="w-[260px] shadow-md h-full border rounded-md p-4">
      <div>
        <div className="flex gap-4">
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
        <p>{user.role}</p>
        <p>{user.email}</p>
       
      </div>
    </div>
  );
}

export default CardUser;
