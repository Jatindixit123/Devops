import { useState } from "react";

function App() {
  // const count = 0;
  const [count, setCount] = useState(0);
  // let count = 0;

  const incrementCounter = () => {
    // count++;
    setCount(count + 1);
  }

  return (
    <>
      <header>
        <h1>Counter Application</h1>
      </header>
      <h2>Count is : {count}</h2>
      {/* Event Handling */}
      <button onClick={incrementCounter}>Incerment Counter</button>
    </>
  )
}

export default App;