/* W07: Project */

/* Declare and initialize global variables */
const meteoElement = document.querySelector("#meteo");
let meteoList = [];

/* async displayFruits Function */
const displayMeteo = (meteos) => {
    meteos.forEach((meteo) => {
        let article = document.createElement("article");
        let weather = document.createElement("h3");
        weather.textContent = weather.name;

        article.appendChild(weather);
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
getMeteo();