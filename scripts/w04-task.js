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
        "Travelling"],
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
document.getElementById("name").textContent = myProfile.name;
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


