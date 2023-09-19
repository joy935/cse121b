const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "new-img");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newTitle = document.createElement("h2");
newTitle.innerText = "CSE 121b";
document.body.appendChild(newTitle);

const anotherParagraph = document.createElement("p")
anotherParagraph.innerText = "Welcome to Javascript Language";
document.body.appendChild(anotherParagraph);

document.body.appendChild(newSection);