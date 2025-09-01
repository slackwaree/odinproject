const container = document.querySelector("body");

const pElement = document.createElement("p");
const h1Element = document.createElement("h1");
const h3Element = document.createElement("h3");
const divElement = document.createElement("div");

pElement.textContent = "Hey I'm red!";
pElement.style.color = "red";
container.appendChild(pElement);

h3Element.textContent = "I'm a blue h3!"
h3Element.style.color = "blue";
container.appendChild(h3Element);

divElement.style.border = "1px solid black";
divElement.style.backgroundColor = "pink";
container.appendChild(divElement);

h1Element.textContent = "I'm in a div";
divElement.appendChild(h1Element);

const pElementDiv = document.createElement("p");
pElementDiv.textContent = "ME TOO!";
divElement.appendChild(pElementDiv);