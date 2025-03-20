document.addEventListener('DOMContentLoaded', function() {
    const photoGallery = document.getElementById('photoGallery');
    const photos = JSON.parse(localStorage.getItem('photos'));

    if (photos && photos.length > 0) {
        photos.forEach(function(photoData) {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');

            // Créer l'image
            const imgElement = document.createElement('img');
            imgElement.src = photoData.url;
            imgElement.alt = photoData.name;

            // Créer les détails de la photo
            const details = document.createElement('div');
            details.classList.add('photo-details');
            details.innerHTML = `
                <h3>${photoData.name}</h3>
                <p><strong>Catégorie :</strong> ${photoData.category}</p>
                <p><strong>Localisation :</strong> ${photoData.location}</p>
                <p><strong>Description :</strong> ${photoData.description}</p>
                <p><strong>Prix :</strong> ${photoData.price} FCFA</p>
            `;

            // Créer les icônes de localisation et de partage
            const icons = document.createElement('div');
            icons.classList.add('photo-icons');
            icons.innerHTML = `
                <span class="icon" title="Voir la localisation">📍</span>
                <span class="icon" title="Partager la photo">🔗</span>
            `;

            // Ajouter les éléments à l'élément photo
            photoItem.appendChild(imgElement);
            photoItem.appendChild(details);
            photoItem.appendChild(icons);

            // Ajouter l'élément photo à la galerie
            photoGallery.appendChild(photoItem);
        });
    } else {
        const message = document.createElement('p');
        message.textContent = 'Aucune photo téléchargée.';
        photoGallery.appendChild(message);
    }
});
photos.forEach(photo => photoGallery.innerHTML += `<div><img src="${photo.url}" style="width:150px;height:150px;object-fit:cover;border-radius:8px;"><p>${photo.name} - ${photo.category} - ${photo.location} - ${photo.description} - ${photo.price} FCFA</p></div>`);
JSON.parse(localStorage.getItem('photos') || '[]').forEach(photo => document.getElementById('photoGallery').innerHTML += `<div><img src="${photo.url}" style="width:150px;height:150px;object-fit:cover;border-radius:8px;"><p>${photo.name} - ${photo.category} - ${photo.location} - ${photo.description} - ${photo.price} FCFA</p></div>`);


// Enregistrer des photos par catégorie dans le localStorage
function savePhotos(category, photos) {
    localStorage.setItem('photos_' + category, JSON.stringify(photos));
}

