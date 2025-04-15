import { useState } from "react";
import Todo from "./components/Todo";

// At a high level, a component is a function that starts with a capital letter and returns some jsx.
// App is also a component.
// Whenever a state variable changes, the components using that state variable also re-renders.
// Note: Anytime a parent re-renders, it's child re-renders as well.
// CountButton is also a component.
// The CountButton component is present within the App component.
// Therefore, the App component is the parent and the CountButton is the child.
// So, if the state variable "todoList" changes, the App component is re-rendered which causes the CountButton component to re-render.

let count = 0;   // count is not a state variable and is not monitored by react for update.

function handleCountButtonClick()
{
  count++;
}

function CountButton()
{
  console.log("CountButton component is re-rendered.")
  return (
    <button onClick = { handleCountButtonClick } > Count: {count} </button>
  )
}

function App() {

  console.log("App component is re-rendered.")

  const [todoList , setTodoList] = useState(
    [
      {
        id: 1 , 
        title: "Arrow" , 
        description: "I have to watch the season-3 of Arrow."
      } , 
      {
        id: 2 , 
        title: "Daredevil" , 
        description: "I have to watch the season-1 of Daredevil."
      } , 
      {
        id: 3 , 
        title: "Flash" , 
        description: "I have to watch season-2 of the Flash."
      }
    ]
  );

  const addTodo = () =>{

    // todoList.push( { title: "Lucifer" , description: "I have to watch season-1 of Lucifer."} )
    // setTodoList(todoList);

    // let newTodoList = []

    // for(let i = 0 ; i < todoList.length ; i++)
    // {
    //   newTodoList.push(todoList[i]);
    // }
    // newTodoList.push(
    //   {
    //     id: todoList.length + 1 , 
    //     title: "Lucifer" , 
    //     description: "I have to watch season-1 of Lucifer."
    //   } 
    // );

    // setTodoList(newTodoList);

    setTodoList(
      [
        ...todoList , 
        {
          id: todoList.length + 1 , 
          title: "Lucifer" , 
          description: "I have to watch season-1 of Lucifer."
        } 
      ]
    )
    console.log(todoList);
  }

  const removeLastTodo = () => {
    // let newTodoList = todoList;
    // console.log(newTodoList);
    // newTodoList.pop();
    // setTodoList(newTodoList);

    // let newTodoList = []

    // for(let i = 0 ; i < todoList.length - 1 ; i++)
    // {
    //   newTodoList.push(todoList[i]);
    // }

    // setTodoList(newTodoList);

    const updatedTodoList = todoList.filter( 
      (todo) => {
        if(todo.id != todoList.length)
        {
          return true;
        }
        else
        {
          return false;
        }
      } 
    )
    setTodoList(updatedTodoList);
    console.log(todoList);
  }

  return (
    <>
    {
      todoList.map( (todo) => { return <Todo title={todo.title} description={todo.description} key={todo.id} ></Todo> } )
    }
    <button onClick={ addTodo }> Add Todo </button>
    <button onClick={ removeLastTodo }> Remove Last Todo </button>
    <CountButton />
    </>
  )
}

export default App
