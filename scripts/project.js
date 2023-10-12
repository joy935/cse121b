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
        let emojiHtml = document.createElement("p");
        emojiHtml.innerHTML = emoji.htmlCode;
        let emojiCategory = document.createElement("p");
        emojiCategory.textContent = emoji.category;
        let emojiGroup = document.createElement("p");
        emojiGroup.textContent = emoji.group;
        
        article.appendChild(emojiName);
        article.appendChild(emojiHtml);
        article.appendChild(emojiCategory);
        article.appendChild(emojiGroup);
        emojiElement.appendChild(article);
    })};
/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    emojiList = await response.json();
    displayEmoji(emojiList);
    console.log(emojiList);
};

/* */
getEmoji();