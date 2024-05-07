import React, { useEffect, useReducer, useState } from "react";
import "./Todo.css";
import TodoAdd from "./Todo-add";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todo from "./Todo-data";
import todoReducer from "./TodoReducer";

const TodoList = () => {
  //     state     фун-ція, яка обробляє state
  const [todoList, dispatch] = useReducer(todoReducer, JSON.parse(localStorage.getItem('todo')) || todo);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const addTask = (title) => {
    dispatch({
      type: "addd",
      payload: title,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const toggleDone = (id) => {
    dispatch({
      type: "toggleDone",
      payload: id,
    });
  };

  const updateTask = (id, title) => {
    dispatch({
      type: "update",
      payload: { id, title },
    });
  };

  const filterMap = {
    All: () => true,
    Done: (task) => task.done,
    "Todo tasks": (task) => !task.done,
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoAdd addTask={addTask} />
      <div>
        <TodoFilter
          setFilter={setFilter}
          filterMap={filterMap}
          activeFilter={filter}
        />
        <ul className="todo-list">
          {todoList.filter(filterMap[filter]).map((item) => (
            <TodoItem
              {...item}
              key={item.id}
              removeTask={removeTask}
              toggleDone={toggleDone}
              updateTask={updateTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
