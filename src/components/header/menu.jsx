import React from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">ToDo</NavLink>
        <NavLink to="/first">First</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
      </nav>
    </header>
  );
};

export default Menu;
