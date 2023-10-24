/* emoji select function to copy and paste */

function emojiSelect(event) {
    if (event.target != event.currentTarget) {
        let smiley = event.target;
        document.querySelector("#message").value += `${smiley.textContent}`;
    }
};

export default emojiSelect;