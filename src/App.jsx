import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { NavBar, Item } from "./components";




function App() {
  const [count, setCount] = useState(0);

  const numero = 5;

  const styleButton = {
    marginTop: "25px",
  };


  return (
    <>
      <div>
        <NavBar />
        <div className="container">
 
        <Item/>
          <div>
            <a href="https://vite.dev" target="_blank">
    
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <span
            style={{
              display: "block",
              fontSize: "10rem",
            }}
          >
            {numero + 1}
          </span>
          <h1>Erlandberger</h1>
          <div className="card">
            <button
              style={styleButton}
              onClick={() => console.log("hola Erland")}
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
