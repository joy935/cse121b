/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
       let temple = document.createElement("ARTICLE");
       let templeName = document.createElement("h3");
       oneTemple.appendChild(templeName);
       let templeImage = document.createElement("IMG"); 
       templeImage.setAttribute("src", imageUrl);
       templeImage.setAttribute("alt", location);
       oneTemple.appendChild(templeName);
       templesElement.appendChild(oneTemple);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */


/* sortBy Function */



getTemples();
console.log(templeList);

/* Event Listener */
