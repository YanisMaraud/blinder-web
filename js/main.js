import { errorID } from "./api.js";

const gameForm = document.querySelector("#gameForm");
const playlistIdEntry = document.querySelector("#playlistIdEntry");

gameForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page et donc la réinitialisation des variables
  const playlistId = playlistIdEntry.value;

  // Création du script pour avoir les données jsonp de la partie
  let scriptJSON = document.createElement("script");
  scriptJSON.setAttribute("id", "scriptJSON");
  scriptJSON.setAttribute("src", "https://api.deezer.com/playlist/" + playlistId + "?output=jsonp&callback=errorID");
  document.body.appendChild(scriptJSON);
});
