import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "hi",
      des: "I say hi",
    },
    {
      title: "hello",
      des: "I say hello",
    },
    {
      title: "h",
      des: "I say h",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border-1 border-purple-600">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.des}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? (
        <button>This button is showen when second butten is clicked</button>
      ) : (
        "Not avilable"
      )}
      {showbtn && (
        <button>This button is showen when second butten is clicked</button>
      )}
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1, setshowbtn(!showbtn))}
        >
          count is {count}
        </button>
        {todos.map((todo) => {
          return <Todo key={todo.title} todo={todo} />;
        })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <Todo /> */} {/* this todo is used where a function is to be rendered without any useeffectsnipit*/ }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
