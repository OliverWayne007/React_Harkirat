import './App.css'
import { useState } from 'react';
import Header from './components/Header'

// Whenever the DOM updates, the component is said to have re-rendered.

// A re-render means that:
// 1. React did some work to calculate what all should update in this component 
// 2. The component actually got called (you can put a log to confirm this) 

// It happens when: 
// 1. A state variable that is being used inside a component changes 
// 2. A parent component re-render triggers all children re-rendering

function App() {

  console.log("App component is re-rendered.");

  const [firstName , setFirstName] = useState("Harkirat");

  function handleClick()
  {
    let newName = Math.random();
    setFirstName(newName);
  }

  return (
    <>
    <Header name = {firstName} />
    <Header name = "Piyush" />
    <button onClick = { handleClick } > Click here to change the title of the first header </button>
    </>
  )

}

export default App;