import { useState } from "react";

export default function Batsman() {
  const [score, setScore] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleScore = (hitRuns) => {
    if (hitRuns === 6) {
      const countSixes = sixes + 1;
      setSixes(countSixes);
    }
    const newScore = score + hitRuns;
    setScore(newScore);
  };
  return (
    <div
      style={{
        border: "2px solid salmon",
        margin: "10px",
        padding: "20px 0px",
      }}
    >
      {score >= 50 && <p>Congratulations!!</p>}
      <h1>Player: Bangla Batsman</h1>
      <h2>Score: {score}</h2>
      <h3>Total Sixes: {sixes}</h3>
      <button onClick={() => handleScore(1)}>Singles</button>
      <button style={{ margin: "0px 5px" }} onClick={() => handleScore(4)}>
        Four
      </button>
      <button onClick={() => handleScore(6)}>Six</button>
    </div>
  );
}
