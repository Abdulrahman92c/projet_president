// Request status
const xhr = new XMLHttpRequest();
const url = "../api/produit.json";
const parent = document.getElementById("produits");

xhr.onreadystatechange = () => {
    // Vérifier si la requête de récupération est terminée
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // Parse JSON, pour transformer le fichier txt en flux JSON
            let jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData);
            // appel de la méthode, passage en paramètre de la requête  
            showProd(jsonData);
        } else {
            console.log("erreur de requête");
            parent.innerHTML = `<p>Erreur de requête : ${xhr.status}</p>`;
        }
    }
};

// traitement des données récupérées 
const showProd = data => {
    let vProduits = ""; // Open list
    let i;

    // itération sur les données depuis l'objet data
    for (i in data.produit) {
        vProduits += `
                    <figure>
                        <img src="${data.produit[i].image.path}" alt="${data.produit[i].nom}">
                        <figcaption>
                            <ul>
                                <li>Nom : ${data.produit[i].nom}</li>
                                <li>Mandat : ${data.produit[i].mandat}</li>
                                <li>Naissance: ${data.produit[i].naissance}</li>
                                <li>Statut: ${data.produit[i].statut}</li>
                            </ul>
                        </figcaption>
                    </figure>
        `;
    }

    parent.innerHTML = `${vProduits}`;
    localStorage.setItem("Data", JSON.stringify(data));
};

xhr.open("GET", url, true);
xhr.send();