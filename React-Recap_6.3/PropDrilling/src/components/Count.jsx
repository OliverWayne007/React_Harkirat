import CountRenderer from "./CountRenderer";

import Buttons from "./Buttons";

function Count( { count , setCount } )
{
    return (
        <div id="Count">
            <CountRenderer count = {count} />
            <Buttons count = {count} setCount = {setCount} />
        </div>
    )
}

export default Count;