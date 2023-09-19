/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Veihi Tupai";
const currentYear = 2023;
const profilePicture = "w02-task/images/photo_veihi.pdf";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("#name");
const foodElement = document.getElementById("#food");
const yearElement = document.getElementById("#year");
const imageElement = document.querySelector("images/placeholder.png").scr;


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of [fullName]");


/* Step 5 - Array */






