import React, { useState , useEffect } from 'react';
import Todo from './Todo';

function TodoList()
{
    console.log("The TodoList component is rendered.")

    console.log("The state variable is initialized")

    const [todoList , setTodoList] = useState( [ {
        "id": 0 , 
        "title": "There is no title" , 
        "description": "I don't want to describe" , 
        "completed": false
    } ] );

    async function fetchTodoList()
    {
        const data = await fetch("https://sum-server.100xdevs.com/todos");
        const json = await data.json();
        const newTodoList = json.todos;
        console.log(newTodoList);
        setTodoList(newTodoList);
    }

    // useEffect hook is fired asynchronously as a side effect
    useEffect(() => {
        setInterval( () => {
            console.log("The useEffect hook is called.")
            fetchTodoList();
        } , 5000);
    }, [])

    return (
        <>
        {todoList.map( (todo) => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
        } )}
        </>
    )
}

export default TodoList;