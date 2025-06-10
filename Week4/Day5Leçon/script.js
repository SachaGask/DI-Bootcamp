
// Transformer du JSON d'API en texte ou JSON:

fetch("https://zivush.github.io/emails.xml") //Fichier XML
  .then(res => res.text()) //Transforme en texte/string
  .then(data => console.log(data)); //Affiche la partie "data"

fetch("https://jsonplaceholder.typicode.com/users/1") //Fichier JSON
  .then(res => res.json()) //Transforme en objet js
  .then(user => console.log(user.name)); //Affiche la partie data


// Promise //

  fetch("url") //URL de l'API
  .then(res => res.json()) // Transforme en json
  .then(data => console.log(data)) // S'execute si réussie
  .catch(err => console.error(err)); // S'execute si erreurs


// API (fetch) dans un formulaire //

fetch("https://exemple.com/api", { //URL de l'API
  method: "POST", // Méthode de la requête
  headers: {
    "Content-Type": "application/json" // Type de contenu envoyé
  },
  body: JSON.stringify({ name: "Sacha", email: "test@mail.com" }) // Corps de la requête
});


// Connecter une API à un formulaire HTML //

document.getElementById("userForm").addEventListener("submit", handleSubmit); // id "userForm" du formulaire et bouton submit

function handleSubmit(event) {
  event.preventDefault(); // Empêche le rechargement automatique de la page

  const form = event.target; // on récupère le formulaire soumis
  const name = form.elements.name.value; // on récupère la valeur du champ "name"
  const email = form.elements.email.value; // on récupère la valeur du champ "email"

  console.log("Nom :", name); // Affiche le nom dans la console
  console.log("Email :", email); // Affiche l'email dans la console
}

// Async & Await //

// On peut ecrire avec then:

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json()) // Transforme en objet js
  .then(data => {console.log(data);}) // Affiche le tableau d’utilisateurs
  .catch(e => console.error(e)); // Affiche les erreurs éventuelles

// Ou la meme chose avec async/await:

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // On attend la réponse de l'API
    const data = await res.json(); // On attend que la réponse soit transformée en JSON
    console.log(data); // On affiche les données dans la console
  } catch (e) {
    console.error("Erreur:", e); // On affiche les erreurs éventuelles
  }
}

getUsers(); // on appelle la fonction


// Attendre chaque résultat avant de continuer //

// setTimeout + await //
const wait = (id) => {x
  return new Promise(res => {
    setTimeout(() => res(id + " Done!"), 1000);
  });
};

// asynchrone avec for...of //

async function callSteps() {
  console.log("Début");

  for (const step of ["Premier", "Deuxième", "Troisième"]) {
    const result = await wait(step);
    console.log(result);
  }

  console.log("Fin");
}

callSteps();
