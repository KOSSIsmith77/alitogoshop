document.getElementById("payment").addEventListener("change", function() {
    let payment = this.value;
    document.getElementById("phoneField").style.display = (payment === "yas" || payment === "moov") ? "block" : "none";
    document.getElementById("cardField").style.display = (payment === "visa" || payment === "carte") ? "block" : "none";
});

document.getElementById("valider").addEventListener("click", function() {
    let plan = document.getElementById("plan").value;
    let duree = document.getElementById("duree").value;
    let payment = document.getElementById("payment").value;
    let code = document.getElementById("code").value;
    
    if (!plan || !duree || !payment) {
        alert("Veuillez remplir toutes les informations.");
        return;
    }

    if (code) {
        alert("Abonnement validé avec code vendeur");
    } else {
        alert("Abonnement validé");
    }

    window.location.href = "sell5.html"; // Redirection après validation
});
function genererCodeVendeur(duree) {  
    let code = Math.random().toString(36).substr(2, 5).toUpperCase();  
    let expiration = new Date();  
    expiration.setDate(expiration.getDate() + duree * 30); // Convertir mois en jours  
    localStorage.setItem("codeVendeur", JSON.stringify({ code, expiration }));  
}
// Lors de l'inscription
const phone = document.getElementById('phone').value;
localStorage.setItem('vendorPhone', phone);
