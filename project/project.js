/* W07: Project */

/* Declare and initialize global variables */
const emojiElement = document.querySelector("#emojiList");
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    reset();
    emojis.forEach((emoji) => {
        let li = document.createElement("li");
        li.setAttribute("emojiName", emoji.name);
        // Extract the hexadecimal part and convert it to decimal
        // const unicodePoint = parseInt((emoji.unicode).slice(2), 16);
        // li.innerHTML = String.fromCodePoint(unicodePoint);
        li.innerHTML = emoji.htmlCode;
        li.setAttribute("category", emoji.category);
        emojiElement.appendChild(li);
    })
};

/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    try {
        const response = await fetch("https://emojihub.yurace.pro/api/all");
        emojiList = await response.json();
        displayEmoji(emojiList);
    } catch (error) {
        console.log("Error fetching emoji data: ", error);
    }
};

/* reset function */
const reset = () => {emojiElement.innerHTML = ""};

/* Even Listener*/
document.querySelector("#searchButton").addEventListener("click", () => {
    reset();
    const searchData = document.querySelector("#search").value;
    const searchResult = emojiList.filter((emoji) => {
        return emoji.category.toLowerCase().includes(searchData.toLowerCase());
    });
    displayEmoji(searchResult);
});

/* Fetch emoji data when the page loads */
window.addEventListener("load", () => {
    getEmoji();
});