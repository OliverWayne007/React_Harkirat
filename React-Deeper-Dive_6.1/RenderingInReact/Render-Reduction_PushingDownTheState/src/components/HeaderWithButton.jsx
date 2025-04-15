import React from 'react';
import Header from './Header';
import { useState } from 'react';

function HeaderWithButton(props)
{
    console.log("HeaderWithButton component re-rendered.");
    
    const [name , setName] = useState(props.name);

    function handleNameChange()
    {
        let newName = Math.random();
        setName(newName);
    }

    return (
        <div>
            <button onClick = {handleNameChange} > Click here to change the first name </button>
            <Header name = {name} />
        </div>
    )
}

export default HeaderWithButton;