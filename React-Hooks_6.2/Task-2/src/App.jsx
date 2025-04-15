import { useState } from "react"

function App() {

  const [inputValue , setInputValue] = useState(0);
  // const [sum , setSum] = useState(0);
  const [count , setCount] = useState(0);

  let sum = 0;
  sum = (inputValue * (inputValue + 1))/2;

  // function updateSum()
  // {
  //   const val = Number(document.getElementById("input").value);
  //   console.log(val);
  //   const newSum = (val * (val + 1))/2;
  //   setSum(newSum);
  // }

  function handleOnClick()
  {
    setCount(count + 1);
    // updateSum();
  }

  function handleInputChange(e)
  {
    const input = Number(e.target.value);
    // const newSum = (input * (input + 1))/2;
    // setSum(newSum);
    setInputValue(input);
    console.log("input: " , input);
    console.log("inputValue: " , inputValue);
    sum = (input * (input + 1))/2;
    console.log("sum: " , sum);
  }

  return (
    <>
     <input type="text" id="input" onChange={handleInputChange} />
     <p> Sum from 0 to {inputValue}: {sum} </p>
     <button onClick={handleOnClick}> Counter ({count})</button>
    </>
  )

}

export default App
