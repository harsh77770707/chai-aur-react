import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './card.jsx'; // Properly import Card component

function App() {
  return (
    <>
      <h1 className='bg-green-200 text-black p-10 rounded-md'>Tailwind Test</h1>
      <Card /> 
      <Card /> 
    </>
  );
}

export default App;
