/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Veihi Tupai";
const currentYear = 2023;
const profilePicture = "images/photo_veihi.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
var imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFood = ["Sushi", "Mango", "Steak frites", "Raspberries", "Chocolate"];
foodElement.textContent = favoriteFood.join(', ');

const newFavoriteFood = "Pizza"; 
favoriteFood.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;


/* Adjust the image */
imageElement.style.maxWidth = '200px';
imageElement.style.borderRadius = '10px';
imageElement.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.8)'; 