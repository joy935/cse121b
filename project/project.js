/* W07: Project - Emoji Selector */

import emojiSelect from "./emojiSelect.js";

/* Declare and Initialize Global Variables */
const emojiElement = document.querySelector("#emojiList");
let emojiList = [];

/* Reset Function */
const reset = () => {emojiElement.innerHTML = ""};

/* Async displayFruits Function */
const displayEmoji = (emojis) => {
    reset();
    emojis.forEach((emoji) => {
        let li = document.createElement("li");
        li.setAttribute("emojiName", emoji.slug);
        li.textContent = emoji.character;
        emojiElement.appendChild(li);
    })
};

/* Async getFruits Funtion Using fetch() */
const getEmoji = async () => {
    try {
        const response = await fetch("https://emoji-api.com/emojis?access_key=eb980a23b69818dff7cbcf593ecf043af6dc1358");
        emojiList = await response.json();
        displayEmoji(emojiList);
    } catch (error) {
        console.log("Error fetching emoji data: ", error);
    }
};

/* Sort by Function */
const sortBy = (emojis) => {
    reset();
    let filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "smileys":
            const smileys = emojiList.filter((emojis) => emojis.group.includes("smileys-emotion"));
            displayEmoji(smileys);
            break;
        case "people":
            const people = emojiList.filter((emojis) => emojis.group.includes("people-body"));
            displayEmoji(people);
            break;
        case "animals-nature":
            const animals = emojiList.filter((emojis) => emojis.group.includes("animals-nature"));
            displayEmoji(animals);
            break;
        case "food-drink":
            const food = emojiList.filter((emojis) => emojis.group.includes("food-drink"));
            displayEmoji(food);
            break;
        case "travel-places":
            const travel = emojiList.filter((emojis) => emojis.group.includes("travel-places"));
            displayEmoji(travel);
            break;
        case "activities":
            const activities = emojiList.filter((emojis) => emojis.group.includes("activities"));
            displayEmoji(activities);
        case "objects":
            const objects = emojiList.filter((emojis) => emojis.group.includes("objects"));
            displayEmoji(objects);
            break;
        case "symbols":
            const symbols = emojiList.filter((emojis) => emojis.group.includes("symbols"));
            displayEmoji(symbols);
            break;
        case "flags":
            const flags = emojiList.filter((emojis) => emojis.group.includes("flags"));
            displayEmoji(flags);
            break;
        case "nofilter":
            displayEmoji(emojiList);
        default:
            console.log("Choose a filter");
    };
};

/* Event Listener Using Emoji List */
emojiElement.addEventListener("click", emojiSelect);

/* Event Listener Using Search Button */
document.querySelector("#searchButton").addEventListener("click", () => {
    const searchData = document.querySelector("#search").value;
    const searchResult = emojiList.filter((emoji) => {
        return emoji.slug.toLowerCase().includes(searchData.toLowerCase());
    });
    displayEmoji(searchResult);
});
/* Event Listener Using Sort By Dropdown */
document.getElementById("sortBy").addEventListener("change", function () {
    const selectedGroup = this.value;
    sortBy(emojiList, selectedGroup);
});
getEmoji().then(() => {
    console.log(emojiList);
});

/* Event Listener Using Select Button */
document.getElementById("selectButton").onclick = function(){
    emojiSelect();
    var text = document.querySelector("#message");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert(`Copied the text: ${text.value}`);
};

/* Fetch emoji data when the page loads */
window.addEventListener("load", () => {
    getEmoji();
    console.log(emojiList);
});