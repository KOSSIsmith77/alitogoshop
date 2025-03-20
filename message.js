// Gestion de la messagerie
function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value;
    if (messageText.trim() !== "") {
        let chatBox = document.getElementById("chatBox");
        let newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.textContent = messageText;
        chatBox.appendChild(newMessage);
        messageInput.value = "";
    }
}