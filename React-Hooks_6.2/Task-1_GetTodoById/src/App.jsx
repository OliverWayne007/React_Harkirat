import { useEffect, useState } from "react"

import Todo from "./components/Todo";

function App() {

  console.log("App component is re-rendered.");

  const [todoId , setTodoId] = useState(0);

  const [todo , setTodo] = useState( {} );

  function handleFormSubmit(event)
  {
    event.preventDefault();
    const inputValue = Number(document.getElementById("input").value);
    setTodoId(inputValue);
  }

  async function fetchTodo(url)
  {
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setTodo(responseJson);
  }

  useEffect( () => {
    fetchTodo(`https://sum-server.100xdevs.com/todo?id=${todoId}`);
  } , [todoId] )

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>Enter TodoId: </label>
        <input id = "input" type="text" />
        <input type="submit" />
      </form>
      <Todo todo = {todo} />
    </>
  )

}

export default App;