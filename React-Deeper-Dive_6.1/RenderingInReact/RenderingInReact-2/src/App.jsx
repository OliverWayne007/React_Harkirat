import { useState } from 'react';

function App() {

  console.log("The App component is re-rendered.");

  const [count, setCount] = useState(0);

  console.log("count: " , count);

  const [counter , setCounter] = useState(0);

  console.log("counter: " , counter);

  const handleCount = () => {
    // React deliberately batches the setCount() functions to reduce the number of re-renders and optimize the performance.
    setCount(count + 1);
    console.log("count: " , count);
    setCount(count + 2);
    console.log("count: " , count);
    setCount(count + 3);
    console.log("count: " , count);
  }

  const handleCounter = () => {
    // React deliberately batches the setCount() functions to reduce the number of re-renders and optimize the performance.
    setCounter((prev) => prev + 1);
    console.log("counter: " , counter);
    setCounter((prev) => prev + 2);
    console.log("counter: " , counter);
    setCounter((prev) => prev + 3);
    console.log("counter: " , counter);
  }

  return (
    <>
    <button onClick={handleCount}> Count: {count} </button>
    <button onClick={handleCounter}> Counter: {counter} </button>
    </>
  )
}

export default App
