import { useState } from 'react';
import './App.css';

function App() {
  // variable whose value is going to be changed should be defined as state
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter Application</h1>
      <span>Counter : {count}</span>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  )
}

export default App
