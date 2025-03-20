// Gestion de l'inscription
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }

    fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Inscription réussie');
        window.location.href = 'login.html'; // Redirection vers la page de connexion
    })
    .catch(error => console.error('Erreur:', error));
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérification de l'email et du mot de passe
    if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Envoi des données au serveur via une requête POST
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Connexion réussie") {
            alert("Bienvenue !");
            window.location.href = 'index2.html';  // Redirection vers la page d'accueil
        } else {
            alert("Email ou mot de passe incorrect");
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
    });
});
 
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Vérifier si l'email ou le téléphone est déjà utilisé
    const existingUser = localStorage.getItem(email) || localStorage.getItem(phone);
    if (existingUser) {
        alert("Cet email ou numéro de téléphone est déjà enregistré.");
        return;
    }

    // Si non, enregistrer les informations dans le localStorage
    localStorage.setItem(email, JSON.stringify({ firstName, lastName, phone, password }));
    alert("Inscription réussie !");
    window.location.href = "index2.html"; // Rediriger vers la page d'accueil
});

 