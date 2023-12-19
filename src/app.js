
document.addEventListener("DOMContentLoaded", (e) => {
 
    let xml, xmlhttp, xmlDoc;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "produit.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    let produits = xmlDoc.getElementsByTagName("produit");
    let vProduits = "";
    for (let i = 0; i < produits.length; i++) {
        let image = produits[i].getElementsByTagName("image")[0].getAttribute("path");
        let nom = produits[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        let mandat = produits[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
        let naissance = produits[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
        let statut = produits[i].getElementsByTagName("statut")[0].childNodes[0].nodeValue;

        vProduits += `
                        <figure>
                                <img src="${image}" alt="${nom}">
                            <figcaption>
                            <ul>
                                <li>Nom : ${nom}</li>
                                <li>Mandat : ${mandat}</li>
                                <li>Naissance : ${naissance}</li>
                                <li>Statut : ${statut}</li>
                            </ul>
                            </figcaption>
                        </figure>`;
    }

    document.getElementById("produits").innerHTML = vProduits;

// Récupère l'année courante
const currentYear = new Date().getFullYear();
// Met à jour le contenu du span
document.querySelector("footer p").textContent = currentYear + " - Abdulrahman Chahdi";
});
