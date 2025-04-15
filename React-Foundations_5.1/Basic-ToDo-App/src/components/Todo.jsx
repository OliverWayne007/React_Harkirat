import React from 'react';

function Todo(props)
{
    console.log("Todo component is re-rendered.")
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.description} </h2>
        </div>
    )
}

export default Todo