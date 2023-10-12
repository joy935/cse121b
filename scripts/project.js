/* W07: Project */

/* Declare and initialize global variables */
const emojiElement = document.querySelector("#meteo");
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    emojis.forEach((emoji) => {
        let article = document.createElement("article");
        let emoji = document.createElement("h3");
        emoji.textContent = emoji.name;

        article.appendChild(emoji);
        meteoElement.appendChild(article);
    })};
/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    meteoList = await response.json();
    //displayMeteo(emojiList);
    console.log(emojiList);
};

/* */
getEmoji();