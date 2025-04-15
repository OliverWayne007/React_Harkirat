import React from 'react';

function Header(props)
{
    console.log("Header component re-rendered.");
    
    return (
        <div>
            My name is: { props.name }
        </div>
    )
}

export default Header;