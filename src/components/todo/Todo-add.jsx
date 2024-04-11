import React from 'react';

const TodoAdd = () => {
  const clickHandler = (message) => { 
    alert(message)
  }

    return (
      <div>
        <input type="text" />

        <button onClick={() => clickHandler('Welcome')}>Add</button>
      </div>
    );
}

export default TodoAdd;
