import {useState} from 'react'
import './App.css';

function App() {
  const [valueOfCount, setValueOfCount] = useState(0)

  const handleIncrement = () =>{
    setValueOfCount((prevValue) => prevValue + 1);
  }

  const handleDecrement = () =>{
    setValueOfCount((prevValue) => prevValue - 1);
  }

  return (
    <div >
      <h1>Counter App</h1>
      <p>Count: {valueOfCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
