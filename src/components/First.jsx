import React, { useEffect, useState } from "react";
import "./First.css";
import { Link } from "react-router-dom";

const First = () => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [arr, setArr] = useState([23, 1, 4]);

  useEffect(() => {
    console.log("effect");
  }, [arr]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addElement = () => {
    setArr([...arr, Math.round(Math.random() * 20)]);
  };

  return (
    <>
      <div>
        <button onClick={addElement}>add</button>
        {arr.join(", ")}
      </div>
      <button onClick={() => setShowCounter(!showCounter)}>show counter</button>
      {showCounter && (
        <div>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
      )}
      See more in <Link to="/todo">todo</Link>
    </>
  );
};

export default First;
