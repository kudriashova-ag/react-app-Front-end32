import React, { useEffect, useRef, useState } from "react";
import "./First.css";
import { Link } from "react-router-dom";
import video from "../assets/mov_bbb.mp4";
import Video from "./video/Video";

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
      <hr />
      <Second />
    </>
  );
};


const Second = () => { 
  const [state, setstate] = useState(false);
  const input = useRef();
  
  
  // зберігає данні без перерендера компонента
  const i = useRef(0);
  

  const focusHandler = () => { 
    // console.dir(input.current);
    // console.dir( document.querySelector('input') );
    input.current.focus()
  }

  return (
    <div>
      <button onClick={() => (i.current = ++i.current)}>change ref</button>
      <button onClick={() => setstate(!state)}>change state</button>
      <button onClick={focusHandler}>set focus</button>
      <input type="text" ref={input} />

      <Video video={video} />
    </div>
  );
}






export default First;
