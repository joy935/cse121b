/* W07: Project */

/* Declare and initialize global variables */
const emojiElement = document.querySelector("#emojiList");
let emojiList = [];

/* async displayFruits Function */
const displayEmoji = (emojis) => {
    reset();
    emojis.forEach((emoji) => {
        let li = document.createElement("li");
        li.setAttribute("emojiName", emoji.slug);
        li.textContent = emoji.character;
        emojiElement.appendChild(li);
    })
};

/* async getFruits Funtion using fetch() */
const getEmoji = async () => {
    try {
        const response = await fetch("https://emoji-api.com/emojis?access_key=eb980a23b69818dff7cbcf593ecf043af6dc1358");
        emojiList = await response.json();
        displayEmoji(emojiList);
    } catch (error) {
        console.log("Error fetching emoji data: ", error);
    }
};

/* reset function */
const reset = () => {emojiElement.innerHTML = ""};

/* Event Listener*/
document.querySelector("#searchButton").addEventListener("click", () => {
    reset();
    const searchData = document.querySelector("#search").value;
    const searchResult = emojiList.filter((emoji) => {
        return emoji.slug.toLowerCase().includes(searchData.toLowerCase());
    });
    displayEmoji(searchResult);
});

/* Fetch emoji data when the page loads */
window.addEventListener("load", () => {
    getEmoji();
});