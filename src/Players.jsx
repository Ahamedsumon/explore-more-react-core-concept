import { useEffect, useState } from "react";
import Player from "./Player";

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="card">
      <h4>Players: {players.length}</h4>
      {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
}
