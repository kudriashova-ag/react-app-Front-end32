import React from "react";

const TodoItem = ({ title, done }) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={done} />
      {title}
      <button>X</button>
    </li>
  );
};

export default TodoItem;
