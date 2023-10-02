/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Veihi Tupai",
    photo: {
        imagePath: "images/photo_veihi.png",
        imageName: "Photo Veihi"},
    favoriteFoods: [ 
        "Sushi", 
        "Mango", 
        "Steak Frites", 
        "Raspberries", 
        "Chocolate"],
    hobbies: [
        "Reading",
        "Cooking",
        "Traveling"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Saskatoon, SK, Canada",
        length: "4 years"
    },
    {
        place: "Geneva, GE, Switzerland",
        length: "1 year"
    },
    {
        place: "Brugg, AG, Switzerland",
        length: "2 months"
    },
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo.imagePath);
imageElement.setAttribute("alt", myProfile.photo.imageName);

/* Favorite Foods List*/
const foodList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let list = document.createElement("li");
    list.innerHTML = food;
    foodList.appendChild(list);
});

/* Hobbies List */
const hobbieList = document.getElementById("hobbies");
myProfile.hobbies.forEach (hobby => {
    let list = document.createElement("li");
    list.innerHTML = hobby;
    hobbieList.appendChild(list);
})

/* Places Lived DataList */


