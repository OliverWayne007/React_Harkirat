import React from "react";

const Navbar = ( { adjective , getAdjective , getCount } ) => {
    console.log("Navbar component is re-rendered...");
  return (
    <div>
        <p> This is a {adjective} and {getAdjective()} navbar </p>
        <p> The count is: {getCount()} </p>
    </div>
  )
}

export default React.memo(Navbar);