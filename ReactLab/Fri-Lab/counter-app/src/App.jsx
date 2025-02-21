import { useState } from "react";



function App() {
  // const count = 0;
  const [count, setCount] = useState(0);
  const incCounter = () => {
    // count++;
    console.log(count);
    setCount(count + 1);
  }
  return (
    <>
      <header>
        <h1>Counter Application</h1>
      </header>
      <div>
        <h3>Count is : {count}</h3>
        {/* Event Handling / Event Binding */}
        <button onClick={incCounter}>Increment Counter</button> 
        <button>Decrement Counter</button>
      </div>
    </>
  )
}

export default App;