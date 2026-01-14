import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [countTo, setCountTo] = useState(0);

  const incrementHandler = (count) => {
    setCount(count + 1);
  };

  const decrementHandler = (count) => {
    setCount(Math.max(count - 1, 0));
  };
  const ResetHandler = () => {
    setCount(0);
  };

  return (
    <>
      <div className="">
        <h1>Counter is {count}</h1>
        <div className="">Count is {count}</div>
        <div className="">
          <button onClick={() => incrementHandler(count)}>Increase</button>
          <button onClick={() => ResetHandler(count)}>Reset</button>
          <button onClick={() => decrementHandler(count)}>Decrease</button>
        </div>
        <div className="">
          <input
            type="text"
            value={countTo}
            onChange={(e) => setCountTo(Number(e.target.value))}
          />
          <button
            onClick={() => {
              setCount(Number(countTo));
            }}
          >
            Set to {countTo}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
