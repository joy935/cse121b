/* W07: Project */

/* Declare and initialize global variables */
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    emojis.forEach((emoji) => {
        let li = document.createElement("li");
        li.setAttribute("emojiName", emoji.name);
        li.innerHTML = emoji.htmlCode;
        emojiList.appendChild(li);
    })};
/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    emojiList = await response.json();
    displayEmoji(emojiList);
    console.log(emojiList);
};

/* */
emojiSearch.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase();
    let emojis = document.querySelectorAll("emojiList li");
    emojis.forEach((emoji) => {
        if (emoji.getAttribute("emojiName").toLowerCase().includes(value)) {
            emoji.style.display = "block";
        } else {
            emoji.style.display = "none";
        }
    });
});