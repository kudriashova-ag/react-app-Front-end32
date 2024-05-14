import React, { useState } from "react";

const TodoItem = ({ title, done, id, removeTask, toggleDone, updateTask }) => {
  console.log("TodoItem");

  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const saveTask = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (newTitle.trim().length === 0) {
        setIsEdit(false);
        setNewTitle(title);
        return;
      }
      updateTask(id, newTitle);
      setIsEdit(false);
    }
  };

  const normalTemplate = (
    <span className={done ? "task-done" : ""} onClick={() => setIsEdit(true)}>
      {title}
    </span>
  );
  
  const editTemplate = (
    <input
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      onKeyDown={saveTask}
    />
  );

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={done}
        onClick={() => toggleDone(id)}
      />
      {isEdit && !done ? editTemplate : normalTemplate}
      <button onClick={() => removeTask(id)}>X</button>
    </li>
  );
};

export default React.memo(TodoItem);
