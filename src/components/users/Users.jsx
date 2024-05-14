import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
