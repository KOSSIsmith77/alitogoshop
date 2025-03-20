function updateForm() {
    const category = document.getElementById('category').value;
    const dynamicFields = document.getElementById('dynamicFields');
    const livraisonFields = document.getElementById('livraisonFields');

    dynamicFields.innerHTML = '';  // Reset les champs dynamiques
    livraisonFields.style.display = 'block';  // Afficher les champs de livraison

    if (category === 'cv') {
        livraisonFields.style.display = 'none';  // Cacher les champs de livraison pour CV
        dynamicFields.innerHTML = `
            <label for="titre">Titre :</label>
            <input type="text" id="titre" name="titre" required>

            <label for="type-emploi">Type d'emploi :</label>
            <select id="type-emploi" name="type_emploi" required>
                <option value="contrat">Contrat</option>
                <option value="temps-plein">Temps plein</option>
                <option value="stage">Stage</option>
                <option value="temps-partiel">Temps partiel</option>
                <option value="temporaire">Temporaire</option>
            </select>

            <label for="situation-professionnelle">Situation professionnelle :</label>
            <select id="situation-professionnelle" name="situation_professionnelle" required>
                <option value="employe">Employé</option>
                <option value="retraite">Retraité</option>
                <option value="independant">Travailleur indépendant</option>
                <option value="sans-emploi">Sans emploi</option>
            </select>

            <label for="cv-file">Ajouter CV :</label>
            <input type="file" id="cv-file" name="cv_file" accept=".pdf,.doc,.docx" required>
        `;
    } 
    else if (category === 'emploi') {
        livraisonFields.style.display = 'none';  // Cacher les champs de livraison pour Emploi
        dynamicFields.innerHTML = `
            <label for="job-titre">Titre :</label>
            <input type="text" id="job-titre" name="titre" required>

            <label for="job-description">Description du job :</label>
            <textarea id="job-description" name="description" required></textarea>

            <label for="job-salaire">Salaire :</label>
            <input type="number" id="job-salaire" name="salaire" required>
        `;
    } 
    else if (category === 'service') {
        livraisonFields.style.display = 'none';  // Cacher les champs de livraison pour Service
        dynamicFields.innerHTML = `
            <label for="service-titre">Titre :</label>
            <input type="text" id="service-titre" name="titre" required>

            <label for="service-description">Description :</label>
            <textarea id="service-description" name="description" required></textarea>

            <label for="service-prix">Prix du service :</label>
            <input type="number" id="service-prix" name="prix" required>
        `;
    }
    else {
        dynamicFields.innerHTML = '';  // Réinitialise les champs dynamiques
        livraisonFields.style.display = 'block';  // Affiche les champs de livraison pour les autres catégories
    }
}
