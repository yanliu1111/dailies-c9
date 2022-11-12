import { useState } from "react";
import "./App.css";
import Adder from "./components/Adder";
import Displayer from "./components/Displayer";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("HighGear");
  //increase count function
  const increaseCount = () => {
    setCount((curr) => {
      return curr + 1;
    }); //setCount is a function that takes in a value and sets the count to that value
  };
  const changeName = () => {
    setName(name + " Gear");
  };
  return (
    <div className="App">
      <header className="App-header">
        First count: {count}
        <button className="red-button" onClick={() => increaseCount()}>
          Increase Count
        </button>
        {/* now start with components Displayer and Adder */}
        <Displayer count={count2} />
        <Adder setCount={setCount2} />
        {/* <button onClick={() => increaseCount(2)}>Increase 2</button> */}
        <br />
        <button className="red-button" onClick={() => setCount(count - 1)}>
          Decrease 1st Count
        </button>
        <br />
        <button className="red-button" onClick={() => setCount(0)}>
          Reset 1st Count
        </button>
        <button className="yellow-button" onClick={() => setCount2(0)}>
          Reset 2nd Count
        </button>
        <br />
        Call me {name}
        <button style={{ backgroundColor: "orange" }} onClick={changeName}>
          AddName
        </button>
        <select name="" id="">
          <option value="">NA</option>
          <option value="">China</option>
          <option value="">USA</option>
          <option value="">Canada</option>
          <option value="">Mexico</option>
        </select>
      </header>
    </div>
  );
}

export default App;
