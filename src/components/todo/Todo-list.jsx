import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoAdd from "./Todo-add";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todo from "./Todo-data";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => { 
    setTodoList(JSON.parse(localStorage.getItem('todo')) || todo);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const addTask = (title) => {
    setTodoList([...todoList, { id: nanoid(), done: false, title }]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  };
  
  const updateTask = (id, title) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      }
      return task;
    });
    setTodoList(updatedTodoList);
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
