import React, { useState } from "react";
import "./First.css";

const First = () => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [arr, setArr] = useState([23, 1, 4]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addElement = () => { 
    setArr([...arr, Math.round(Math.random() * 20)]);
  }

  return (
    <>
      <div>
        <button onClick={addElement}>add</button>
        {arr.join(', ')}
      </div>


      <button onClick={() => setShowCounter(!showCounter)}>show counter</button>

      {showCounter && (
        <div>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
      )}
    </>
  );
};

export default First;

