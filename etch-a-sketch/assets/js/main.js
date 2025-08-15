const container = document.querySelector(".flex-container");

document.addEventListener("DOMContentLoaded", setGridSize());

function setGridSize() { // Set initial grid width/height
    for (columns=0; columns<16; columns++) {
        const columnElement = document.createElement("div");
        columnElement.classList.add("row");
        container.appendChild(columnElement);

        for (rows=0; rows<16; rows++) { // Append rows inside of column container
            const rowElement = document.createElement("div");
            rowElement.classList.add("column");
            columnElement.appendChild(rowElement);  
        }
    }
    setTogglable();
}

const newGridBtn = document.getElementById("new-grid");
newGridBtn.addEventListener("click", function() {
    let getGridSize = prompt("Enter a new grid size (e.g: 32)");

    switch (true) {
        case getGridSize === null || getGridSize === "":
            return;
        case isNaN(getGridSize):
            window.alert("Error: Not a number!");
            return;
        case getGridSize.includes("."):
            window.alert("Error: Whole numbers only!");
            return;
        case getGridSize < 2:
            window.alert("Error: Minimum grid size is 2!");
            return
        case getGridSize > 100:
            window.alert("Error! Maximum grid size is 100!");
            return;
    }

    const elementsToRemove = document.querySelectorAll(".row")
    elementsToRemove.forEach(element => {
        element.remove();
    })
    for (columns=getGridSize; columns!=0; columns--) {
        const columnElement = document.createElement("div");
        columnElement.classList.add("row");
        container.appendChild(columnElement);

        for (rows=getGridSize; rows!=0; rows--) { // Append rows inside of column container
            const rowElement = document.createElement("div");
            rowElement.classList.add("column");
            columnElement.appendChild(rowElement);  
        }
    }
    setTogglable();
})

function setTogglable() { // Enables toggling of square colour
    const columnElements = document.querySelectorAll(".column");
    columnElements.forEach(element => {
        element.addEventListener("click", function() {
            this.classList.toggle("coloured");
        })
    })
}