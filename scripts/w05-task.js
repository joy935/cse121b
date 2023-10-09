/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
       let oneTemple = document.createElement("ARTICLE");
       let templeName = document.createElement("h3");
       templeName.textContent = temple.location;
       oneTemple.appendChild(templeName);
       let templeImage = document.createElement("IMG"); 
       templeImage.setAttribute("src", temple.imageUrl);
       templeImage.setAttribute("alt", temple.location);
       oneTemple.appendChild(templeImage);
       templesElement.appendChild(oneTemple);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
        templesElement.innerHTML = ""};

/* sortBy Function */
const sortBy = (temple) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            const utah = templeList.filter((temples) => temples.location.includes("Utah"));
            displayTemples(utah);
            break;
        case "notutah":
            const notutah = templeList.filter((temples) => !temples.location.includes("Utah"));
            displayTemples(notutah);
            break;
        case "older":
            const older = templeList.filter((temples) => new Date(temples.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;
        case "all":
            displayTemples(templeList);
            break;
        default:
            console.log("Choose a filter");
    };
};

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
getTemples();
console.log(templeList);

/* Event Listener */
