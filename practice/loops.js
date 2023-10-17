// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];

  // using forEach
  const foodsElement = document.querySelector("#favorite-foods");
  function GetFavoriteFoods1() {
    myInfo.favoriteFoods.forEach((food) => {
        let li = document.createElement("li");
        li.textContent = food;
        foodsElement.appendChild(li);
    });
    }

  // using map
  const foodsElement2 = document.querySelector("#favorite-foods");
  function GetFavoriteFoods2() {
    myInfo.favoriteFoods.map((food) => {
        let li = document.createElement("li");
        li.textContent = food;
        foodsElement2.appendChild(li);
        return li;
        
    });
    }

  // create a function that will take a food string and return that string embedded in some html
  const foodsElement3 = document.querySelector("#favorite-foods");  
  function GetFavoriteFoods3(food) {
    return `<li>${food}</li>`;
  }
  // create a function that will take a place string and return that string embedded in some html
    const placesElement = document.querySelector("#places-lived");
    function GetPlacesLived(placesLived) {
        return `<dt>${placesLived.place}</dt><dd>${placesLived.length}</dd>`;
    }
  // create a function that will take a list, and a callback function to produce an HTML template
    function GenerateList(placesLived, callback) {
        const htmlList = placesLived.map(callback).join("");
        return htmlList;
    }
  // call the function for the placesLived list and for the favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call.
  foodsElement3.innerHTML = GenerateList(myInfo.favoriteFoods, GetFavoriteFoods3);
  placesElement.innerHTML = GenerateList(myInfo.placesLived, GetPlacesLived);

  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);