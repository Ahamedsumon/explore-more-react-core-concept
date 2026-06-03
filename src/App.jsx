import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Users from "./User";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import Counter from "./Counter";
import ShowHide from "./ShowHide";
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
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
        <ShowHide></ShowHide>
        <Counter></Counter>
        <Players></Players>
        <Suspense fallback={<p>Posts are loading...</p>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>
        <Suspense fallback={<h3>Friends are coming for treat..</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>
        <Batsman></Batsman>

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
