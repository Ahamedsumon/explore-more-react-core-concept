import { useState } from "react";

export default function Counter() {
  const countStyle = {
    border: "2px solid yellow",
    padding: "30px 0px",
  };

  const [count, setCount] = useState(0);

  const handleCount = () => {
    const newcount = count + 1;
    setCount(newcount);
  };
  return (
    <div style={countStyle}>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}
