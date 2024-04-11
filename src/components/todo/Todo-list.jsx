import React from "react";
import "./Todo.css";
import TodoAdd from "./Todo-add";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todo from './Todo-data';

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd />
      <div>
        <TodoFilter />
        <ul className="todo-list">
          {todo.map((item, index) => (
            <TodoItem {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;


