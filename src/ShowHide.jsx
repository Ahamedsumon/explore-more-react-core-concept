import { useState } from "react";

export default function ShowHide() {
  const [status, setStatus] = useState(false);
  const handleShowHide = () => {
    setStatus(!status);
  };

  return (
    <div className="card">
      <h2>{status ? "" : "Hello, React Learner!"}</h2>
      <button onClick={handleShowHide}>Show/Hide text</button>
    </div>
  );
}
