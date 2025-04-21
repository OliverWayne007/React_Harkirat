import './App.css'

import Count from './components/Count';

import { useState } from 'react';

import { CountContext } from './CountContext';

function App() 
{
  const [count , setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count} >
      <Count setCount = {setCount} />
      </CountContext.Provider>
    </div>
  )
}

export default App
