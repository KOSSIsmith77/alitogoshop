const photoData = {
    url: imgUrl, // URL de l'image
    name: "Nom du produit", // Nom du produit
    category: "Électronique", // Catégorie
    location: "Lomé", // Localisation
    description: "Une description détaillée du produit", // Description
    price: 50000 // Prix du produit
};
localStorage.setItem('photos', JSON.stringify([...JSON.parse(localStorage.getItem('photos') || '[]'), {url: imgUrl, name: "Nom du produit", category: "Électronique", location: "Lomé", description: "Une description détaillée du produit", price: 50000}]));


localStorage.setItem('photos', JSON.stringify([...JSON.parse(localStorage.getItem('photos') || '[]'), {url: imgUrl, name: Titre.value, category: categorie.value, location: region.value, description: Description.value, price: prix.value}]));
