/* W07: Project */

/* Declare and initialize global variables */
const emojiElement = document.querySelector("#emojiList");
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    emojis.forEach((emoji) => {
        let li = document.createElement("li");
        li.setAttribute("emojiName", emoji.name);
        li.innerHTML = emoji.htmlCode;
        emojiElement.appendChild(li);
    })
};

/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    emojiList = await response.json();
    displayEmoji(emojiList);
};

/* reset Function */
// const reset = () => {
//     emojiSearch.innerHTML = ""};


/* */
// document.querySelector("#emojiSearch").addEventListener("change", () => {
//     emojiSearch(emojiList)
// });
getEmoji();