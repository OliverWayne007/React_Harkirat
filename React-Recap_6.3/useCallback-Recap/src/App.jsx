import { useState , useCallback } from 'react'

import Navbar from '../components/Navbar'

function App() {

  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setCount(count + 1)
  }

  const getCount = useCallback( () => { 
    return count; 
  } , [count] );

  // const getAdjective = () => {
  //   return "decent";
  // }

  const getAdjective = useCallback( () => {
    return "decent";
  } , [] );

  console.log("The App component is re-rendered...");

  return (
    <div>
      <Navbar adjective = "good"  getAdjective = {getAdjective}  getCount = {getCount} />
      <button onClick={handleOnClick}> Increment </button>
    </div>
  )
}

export default App;