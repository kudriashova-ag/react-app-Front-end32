import React, { useContext, useState } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import classNames from "classnames";
import { Button, Modal } from "antd";
import Registration from "../Forms/Registration";

const Menu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={classNames({ dark: theme === "dark" })}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">ToDo</NavLink>
        <NavLink to="/first">First</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <div onClick={toggleTheme}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </div>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Registration />
      </Modal>

    </header>
  );
};

export default Menu;
