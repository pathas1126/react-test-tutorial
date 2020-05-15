import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((prevCount) => ++prevCount);
  };
  const onDecrease = () => {
    setCount((prevCount) => --prevCount);
  };

  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
