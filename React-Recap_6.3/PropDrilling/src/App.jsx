import './App.css'

import Count from './components/Count';

import { useState } from 'react';

function App() 
{
  const [count , setCount] = useState(0);

  return (
    <div>
      <Count count = {count} setCount = {setCount} />
    </div>
  )
}

export default App
