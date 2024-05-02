import React, { useContext } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import classNames from "classnames";

const Menu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={classNames({ dark: theme === "dark" })}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">ToDo</NavLink>
        <NavLink to="/first">First</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <div onClick={toggleTheme}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </header>
  );
};

export default Menu;
