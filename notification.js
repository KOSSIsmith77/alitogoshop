// Gestion des notifications
function showNotification(message) {
    let notificationBox = document.getElementById("notificationBox");
    let newNotification = document.createElement("div");
    newNotification.classList.add("notification");
    newNotification.textContent = message;
    notificationBox.appendChild(newNotification);
    setTimeout(() => {
        newNotification.remove();
    }, 5000);
}
