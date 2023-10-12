/* W07: Project */

/* Declare and initialize global variables */
const meteoElement = document.querySelector("#meteo");
let meteoList = [];

/* async displayFruits Function */
const displayMeteo = (meteo) => {
    meteo.forEach((meteo) => {
        let article = document.createElement("article");
        let fruitName = document.createElement("h3");
        fruitName.textContent = fruit.name;

        article.appendChild(fruitName);
        meteoElement.appendChild(article);
    })};
/* async getFruits Funtion using fetch() */
const getMeteo = async () => {
    const response = await fetch("https://api.weather.gov/");
    meteoList = await response.json();
    displayMeteo(meteoList);
    console.log(meteoList);
};

/* */
getFruits();