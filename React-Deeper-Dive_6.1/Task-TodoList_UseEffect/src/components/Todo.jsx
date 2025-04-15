import React from 'react';

export default function Todo( { title , description , completed } )
{
    return ( completed ? <></> : 
    <div>
        <h1> Title: {title} </h1>
        <h2> Description: {description} </h2>
    </div>
    )
}