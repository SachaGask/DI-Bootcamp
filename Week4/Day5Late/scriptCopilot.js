
//Ex1

// fetch ("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     // .then(utilisateur => console.log(utilisateur))
//     .then(utilisateur => {
//         utilisateur.forEach(user => {
//             console.log(`${user.name}`);
//             });
//     })
//     .catch(erreur => console.error("Erreur:", erreur));

// Ex1

// fetch ("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(utilisateur => {utilisateur.forEach(user =>
//         {console.log(`${user.name}`);
//     })
//     .catch(e => {
//         console.error("Erreur:", e);
//     })
// })

//Ex 2

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(user => {
//         const choix = Math.floor(Math.random() * user.length);
//         const userChoisi = user[choix].name;
//         console.log(userChoisi)
//     })

//Ex 3

// function getFirstUserEmail() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(recup => recup.json())
//     .then(user => console.log(user[0].email))
//     .catch(e => console.error("Erreur:", e));

// }

// getFirstUserEmail();

// Ex 4

document.getElementById("formulaire").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement automatique de la page

    const form = event.target; // on récupère le formulaire soumis
    const name = form.elements.name.value; // on récupère la valeur du champ "name"
    const email = form.elements.email.value; // on récupère la valeur du champ "email"

    console.log("Nom :", name); // Affiche le nom dans la console
    console.log("Email :", email); // Affiche l'email dans la console
}

function attFrere() {
    
}