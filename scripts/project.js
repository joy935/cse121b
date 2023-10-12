/* W07: Project */

/* Declare and initialize global variables */
const fruitElement = document.querySelector("#fruits");
let fruitList = [];
let fruit_name = "";

/* async displayFruits Function */
const displayFruits = (fruits) => {
    fruits.forEach((fruit) => {
        let article = document.createElement("article");
        let fruitName = document.createElement("h3");
        fruitName.textContent = fruit.name;
        let fruitId = document.createElement("p");
        fruitId.textContent = fruit.id;
        let fruitGenus = document.createElement("p");
        fruitGenus.textContent = fruit.genus;
        let fruitFamily = document.createElement("p");
        fruitFamily.textContent = fruit.family;
        let fruitOrder = document.createElement("p");
        fruitOrder.textContent = fruit.order;
        let fruitNutrition = document.createElement("p");
        fruitNutrition.textContent = fruit.nutrition;

        article.appendChild(fruitName);
        article.appendChild(fruitId);
        article.appendChild(fruitGenus);
        article.appendChild(fruitFamily);
        article.appendChild(fruitOrder);
        article.appendChild(fruitNutrition);
        fruitElement.appendChild(article);
    })};
/* async getFruits Funtion using fetch() */
const getFruits = async (fruit_name) => {
    const response = await fetch(`https://www.fruityvice.com/api/fruit/${fruit_name}`);
    fruitList = await response.json();
    displayFruits(fruitList);
};

/* */

document.querySelector("#search").addEventListener("click", function () {
    const fruitName = document.querySelector("#fruitName").value;
    getFruits(fruitName)});
console.log(fruitList);