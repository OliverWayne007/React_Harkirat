import React from 'react';

export default function Todo(props)
{
    console.log("Todo component re-rendered.");

    if(Object.keys(props.todo).length === 0)
    {
        return <></>
    }

    return (
        <div>
            <h1> {props.todo.todo.title} </h1>
            <h2> {props.todo.todo.description} </h2>
        </div>
    )
}