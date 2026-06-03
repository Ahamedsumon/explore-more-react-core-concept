import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  // const handleResetCount = () => {
  //   const resetCount = 0;
  //   setCount(resetCount);
  // };

  // const handleDecreasecount = () => {
  //   const newCount = count - 1;

  //   setCount(newCount);
  // };

  const handleCount = (operator) => {
    if (operator === "+") {
      setCount(count + 1);
    } else if (operator === "c") {
      setCount(0);
    } else if (operator === "-") {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      <h2>{count}</h2>
      <button onClick={() => handleCount("+")}>Increase</button>
      <button onClick={() => handleCount("c")}>Reset</button>
      <button onClick={() => handleCount("-")}>Decrease</button>
    </div>
  );
}
