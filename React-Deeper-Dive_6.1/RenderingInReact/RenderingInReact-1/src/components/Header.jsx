import React from 'react';

function Header( { name } )
{
    console.log("Header component is re-rendered.")
    return (
        <div>
            My name is: {name}
        </div>
    )
}

export default Header;