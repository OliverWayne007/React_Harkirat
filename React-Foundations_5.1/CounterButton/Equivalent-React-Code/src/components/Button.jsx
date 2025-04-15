import React from 'react';
import { useState } from 'react';

function Button()
{
    const [count , setCount] = useState(0);

    function onButtonPress()
    {
        setCount(count + 1);
    }

    return (
        <button onClick={onButtonPress}> Counter: {count} </button>
    )
}

export default Button;