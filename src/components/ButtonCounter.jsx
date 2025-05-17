import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  const handleClickInc = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleClickDec = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <>
      <h2>ButtonCounter</h2>
      <p>
        Button clicked {count} {count === 0 ? "time" : "times"}
      </p>
      <button onClick={handleClickInc}>Click me Increment</button>
      <button onClick={handleClickDec}>Click me Decrement</button>
    </>
  );
};

export default ButtonCounter;
