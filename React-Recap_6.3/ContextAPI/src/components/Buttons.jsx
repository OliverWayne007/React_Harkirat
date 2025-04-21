import { useContext } from "react"
import { CountContext } from "../CountContext"

const Buttons = ( { setCount } ) => {

    const count = useContext(CountContext);

    return (
        <div>
            <button onClick={ () => { setCount(count + 1) } } > Increase Count </button>
            <button onClick={ () => { setCount(count - 1) } } > Decrease Count </button>
        </div>
    )
    
}

export default Buttons;