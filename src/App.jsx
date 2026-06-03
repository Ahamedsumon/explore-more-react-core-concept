import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("i am clicked");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  return (
    <>
      <div className="">
        <h1>Vite + React</h1>
        <Batsman></Batsman>
        <Counter></Counter>
        <div>
          <button onClick={handleClick}>Click Me</button>
          <button
            onClick={function handleClick2() {
              alert("clicked 2");
            }}
          >
            Click Me 2
          </button>
          <button onClick={handleClick3}>Click 3</button>
          <button onClick={() => alert("click 4")}>Click 4</button>
        </div>
      </div>
    </>
  );
}

export default App;
