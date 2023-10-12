/* W07: Project */

/* Declare and initialize global variables */
const emojiElement = document.querySelector("#meteo");
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    emojis.forEach((emoji) => {
        let article = document.createElement("article");
        let emojiName = document.createElement("h3");
        emojiName.textContent = emoji.name;

        article.appendChild(emojiName);
        emojiElement.appendChild(article);
    })};
/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    emojiList = await response.json();
    //displayMeteo(emojiList);
    console.log(emojiList);
};

/* */
getEmoji();