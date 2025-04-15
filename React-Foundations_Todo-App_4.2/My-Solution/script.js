
const main = document.getElementById("main");

const titleInput = document.querySelector(".titleInput");

let title = "";

titleInput.addEventListener("change" , (event) => {
    title = event.target.value;
} );

let description = "";

const handleDescriptionChange = (event) => {
    description = event.target.value;
}

const descriptionInput = document.querySelector(".descriptionInput");

descriptionInput.addEventListener("change" , handleDescriptionChange);

// console.log(description);

const addTodoButton = document.querySelector(".addTodoButton");

addTodoButton.addEventListener("click" , () => {
    if(title !== "" && description !== "")
    {
        let todoElement = document.createElement("div");
        let todoTitle = document.createElement("h3");
        let todoDescription = document.createElement("p");
        let markAsDoneButton = document.createElement("button");

        todoTitle.innerText = title;
        todoTitle.style.color = "white";

        todoDescription.innerText = description;
        todoDescription.style.color = "white";

        markAsDoneButton.innerText = "Mark As Done";
        markAsDoneButton.style.border = "3px solid black";
        markAsDoneButton.style.padding = "5px";
        markAsDoneButton.style.borderRadius = "10px";
        // Todo ----> Add functionality to the Mark As Done Button


        todoElement.appendChild(todoTitle);
        todoElement.appendChild(todoDescription);
        todoElement.appendChild(markAsDoneButton);
        todoElement.style.margin = "20px";
        todoElement.style.backgroundColor = "green";
        todoElement.style.padding = "5px";

        main.appendChild(todoElement);
    }
} )