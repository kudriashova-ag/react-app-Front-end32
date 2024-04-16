import React, { useState } from "react";
import "./Todo.css";
import TodoAdd from "./Todo-add";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todo from "./Todo-data";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [todoList, setTodoList] = useState(todo);

  const addTask = (title) => {
    setTodoList([...todoList, { id: nanoid(), done: false, title }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd addTask={addTask} />
      <div>
        <TodoFilter />
        <ul className="todo-list">
          {todoList.map((item, index) => (
            <TodoItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
