// The state initialization has to be taken care of by the React developer
let state = 
{
    count: 0
}

// State updation also has to be taken care of by the React developer
function onButtonPress()
{
    state.count += 1;  // State-Updation has to be handled by the developer.
    buttonComponentReRender();   // Component Re-Rendering is handled by the React library when writing code in React.
}

// As a React developer, we need to write the component code
function buttonComponent(count)
{
    const button = document.createElement("button");
    button.setAttribute("onclick" , "onButtonPress()");
    button.innerHTML = `Counter: ${count}`;
    return button;
}

// The following code is also taken care of by the React library
function buttonComponentReRender()
{
    const root = document.getElementById("root");
    root.innerHTML = "";
    const component = buttonComponent(state.count);
    root.appendChild(component);
}

buttonComponentReRender();   // This Re-Rendering is also taken care of by the React library.