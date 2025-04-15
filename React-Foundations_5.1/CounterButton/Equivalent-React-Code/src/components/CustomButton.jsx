import React from 'react';

function CustomButton(props)
{
    function onCustomButtonClick()
    {
        props.setCount(props.count + 1);
    }

    return (
        <button onClick={onCustomButtonClick}> Custom-Counter: {props.count} </button>
    );
    
}

export default CustomButton;