import CountRenderer from "./CountRenderer";

import Buttons from "./Buttons";

function Count( { setCount } )
{
    return (
        <div id="Count">
            <CountRenderer />
            <Buttons setCount = {setCount} />
        </div>
    )
}

export default Count;