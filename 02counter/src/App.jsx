import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Initialize counter from localStorage or default to 1
  const [counter, setCounter] = useState(() => {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? parseInt(storedCounter) : 1;
  });

  // Function to add value and store in localStorage
  const addValue = () => {
    if (counter < 20){
    const newCounter = counter + 1;
    setCounter(newCounter);
    localStorage.setItem('counter', newCounter); // Save to localStorage
    }
  };

  // Function to remove value and store in localStorage
  const removeValue = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      localStorage.setItem('counter', newCounter); // Save to localStorage
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
