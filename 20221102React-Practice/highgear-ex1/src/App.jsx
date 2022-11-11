import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("HighGear");
  //increase count function
  const increaseCount = (amount = 1) => {
    setCount(count + amount); //setCount is a function that takes in a value and sets the count to that value
  };
  const changeName = () => {
    setName(name + " Gear");
  };
  return (
    <div className="App">
      <header className="App-header">
        the count is {count}
        <button onClick={() => increaseCount(1)}>Increase 1</button>
        <button onClick={() => increaseCount(2)}>Increase 2</button>
        <br />
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        <br />
        <button onClick={() => setCount(0)}>Reset Count</button>
        <br />
        Call me {name}
        <button onClick={changeName}>AddName</button>
      </header>
    </div>
  );
}

export default App;
