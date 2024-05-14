import React, { useState } from "react";
import { NavLink, Outlet, useLoaderData, useSearchParams } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [search, setSearch] = useSearchParams();
  const [textSearch, setTextSearch] = useState(search.get("q"));

  const searchHandler = (e) => {
    setTextSearch(e.target.value);
    setSearch({ q: e.target.value });
  };

  const filterUsers = (user) => {
    //  return user.name.includes(textSearch);
    // return user.name.toLowerCase().startsWith(textSearch.toLowerCase());
    return new RegExp("^" + textSearch, "i").test(user.name);
   }

  return (
    <div>
      <input type="text" value={textSearch} onChange={searchHandler} />

      <div>
        {users.filter(filterUsers).map((user) => (
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