import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const eventHandler = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <h3>Count is : {count}</h3>
      {/* Event Handling */}
      <button onClick={eventHandler}>Increment Counter</button>
    </div>
  )
}

export default App
