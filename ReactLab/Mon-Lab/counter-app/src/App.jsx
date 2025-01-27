import { useState } from 'react'
import './App.css'

function App() {
  // const count = 0;
  const [count, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(count + 1);
    // setCounter(count++);
  }
  
  return (
    <div>
      <h1>Counter Example</h1>
      <p>Count is : {count}</p>
      {/* Event Handling */}
      <button onClick={incCounter}>Increment Counter</button>
      <button>Decrement Counter</button>
    </div>
  )
}

export default App
