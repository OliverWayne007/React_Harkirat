import React from 'react';

export default function CardWrapper( { Component } )
{
    return (
        <div style = { { border: "5px solid white" , padding: "20px" , margin: "20px" } } >
            <Component />
        </div>
    )
}