const Buttons = ( { count , setCount } ) => {
    return (
        <div>
            <button onClick={ () => { setCount(count + 1) } } > Increase Count </button>
            <button onClick={ () => { setCount(count - 1) } } > Decrease Count </button>
        </div>
    )
}

export default Buttons;