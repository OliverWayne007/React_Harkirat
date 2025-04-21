import { useContext } from "react";
import { CountContext } from "../CountContext";

function CountRenderer( { count } )
{
    const count = useContext(CountContext);

    return (
        <div>
            {count}
        </div>
    )    
}

export default CountRenderer;