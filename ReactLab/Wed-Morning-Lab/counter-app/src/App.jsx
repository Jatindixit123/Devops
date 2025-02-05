import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
    return (
      <>
        <header>
          <h1>Counter Application</h1>
        </header>

        <h2>Count is : {count}</h2>
        <button onClick={handleIncrement}>Increment Counter</button>
        <button onClick={handleDecrement}>Decrement Counter</button>
      </>
    )
}

export default App
