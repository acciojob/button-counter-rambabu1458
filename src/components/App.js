
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count, setCount]=useState(0);
   const handleClickInc = () => {
    setCount(prevCount => prevCount + 1);
  };
   const handleClickDec = () => {
    setCount(prevCount =>  (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Button clicked {count} {count === 0 ? "time" : 'times'}</h2>
        <button onClick={handleClickInc}>Click me Increment</button>
        <button onClick={handleClickDec}>Click me Decrement</button>
    </div>
  )
}

export default App
