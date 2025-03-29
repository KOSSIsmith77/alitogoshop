// Lors de l'inscription
const phone = document.getElementById('phone').value;
localStorage.setItem('vendorPhone', phone);
function traduire(langue) {
    let traductions = { "fr": "Bienvenue", "en": "Welcome", "es": "Bienvenido" };
    document.getElementById("titre").textContent = traductions[langue] || "Bienvenue";
}
