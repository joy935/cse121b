
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

person.age = 45;
person["name"]["last"] = "Cratchit";

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");

const myNotification = new Notification("Hello!");

let bandInfo;

// Put your code here
bandInfo = {
name: "Late Park",
nationality: "English",
genre: "Rock",
formed: 2019,
split: 2022,
album: {
    name: "The era",
    year: 2019,
    name2: "The fury",
    year2: 2020, }
};

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    