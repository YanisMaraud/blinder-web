// Gestion des erreurs lors de la requête de l'API
export function errorID(json) {
  if ("error" in json) {
    let error = document.getElementById("error");

    // S'il n'y a pas déjà une erreur d'affichée, alors on peut en créer une (sinon, on modifie le texte de l'erreur déjà présente)
    if (!error) {
      // Affichage de l'erreur pour informer l'utilisateur
      error = document.createElement("p");
      error.setAttribute("id", "error");
      error.style.color = "red";

      // Insertion de l'erreur sur la page au dessus de la saisie de l'ID de la playlist
      const title = document.querySelector("h1");
      title.after(error);
    }

    document.getElementById("playlistIdEntry").value = ""; // Réinitialisation du contenu du champ de l'ID de la playlist

    if (json.error.code == 4)
      error.textContent = "Vous avez envoyé trop de requêtes. Veuillez patienter quelques secondes.";
    else if (json.error.code == 200) error.textContent = "Votre playlist est en privé.";
    else if (json.error.code == 800) error.textContent = "La playlist n'existe pas.";
    else error.textContent = "Erreur lors du chargement de la playlist.";
  } else {
    // Suppression du formulaire et de l'erreur pendant la partie
    const gameForm = document.querySelector("#gameForm");
    gameForm.remove();
    const error = document.getElementById("error");
    if (error) error.remove();

    // Changement du titre
    const title = document.querySelector("h1");
    title.textContent = "Partie en cours";
  }

  // Suppression du script pour ne pas encombrer le code HTML
  const scriptJSON = document.getElementById("scriptJSON");
  scriptJSON.remove();
}

// Rend la fonction callback errorID visible dans window
window.errorID = errorID;
