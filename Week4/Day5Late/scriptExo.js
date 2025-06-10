// Leçon complète : FETCH, PROMISES et ASYNC/AWAIT en JavaScript

// -------------------------
// PARTIE 1 : FETCH et Promises
// -------------------------

fetch("https://zivush.github.io/emails.xml")
  .then(res => res.text())
  .then(data => console.log("XML brut:", data))
  .catch(e => console.error("Erreur de fetch:", e));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => console.log("Nom:", user.name, "Email:", user.email))
  .catch(e => console.error("Erreur JSON:", e));

// -------------------------
// PARTIE 2 : Formulaires GET & POST
// -------------------------

document.getElementById("userForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const userId = event.target.elements.id.value;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(user => render(user))
        .catch(e => console.log(e));
}

function render(obj) {
    const div = document.createElement("div");
    div.textContent = `${obj.name} - ${obj.email}`;
    document.getElementById("root").appendChild(div);
}

function addUser(e) {
    e.preventDefault();
    const { name, username, email } = e.target;
    fetch("https://users-18kl.onrender.com/userjson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.value, username: username.value, email: email.value })
    })
    .then(res => res.json())
    .then(users => addUsersToPage(users))
    .catch(e => console.error(e));
}

function addUsersToPage(arr) {
    const html = arr.map(user => `<div>${user.name} - ${user.username} - ${user.email}</div>`);
    document.getElementById("users").innerHTML = html.join("");
}

// -------------------------
// PARTIE 3 : Async/Await & Promises
// -------------------------

function getX() {
    return Promise.resolve(5);
}

async function _getX() {
    throw new Error("Oops, something went wrong");
}

_getX()
  .then(val => console.log("_getX result:", val))
  .catch(err => console.error("_getX error:", err.message));

async function getXY() {
    try {
        const x = await _getX();
        console.log("x:", x);
    } catch(e) {
        console.error("getXY error:", e.message);
    }
}
getXY();

// -------------------------
// PARTIE 4 : Attente en série avec Await
// -------------------------

const timeOut = (id) => new Promise(res => setTimeout(() => res(id + " Done!"), 2000));

async function calltimeOut() {
    console.log("Before, Done !");
    for (const item of ["first", "second", "third"]) {
        console.log(await timeOut(item));
    }
    console.log("After, Done !");
}
calltimeOut();

// -------------------------
// EXERCICE 1 : Giphy API - Search "hilarious"
// -------------------------

fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
  .then(res => {
    if (!res.ok) throw new Error("Erreur API Giphy");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Erreur Giphy:", err));

// -------------------------
// EXERCICE 2 : Giphy API - Search "sun" (limit 10, offset 2)
// -------------------------

fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2")
  .then(res => {
    if (!res.ok) throw new Error("Erreur API Giphy sun");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Erreur sun:", err));

// -------------------------
// EXERCICE 3 : SWAPI en async/await
// -------------------------

async function getStarship() {
  try {
    const res = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!res.ok) throw new Error("Erreur SWAPI");
    const data = await res.json();
    console.log(data.result);
  } catch (e) {
    console.error("Erreur:", e);
  }
}
getStarship();

// -------------------------
// EXERCICE 4 : Analyse de code asynchrone
// -------------------------

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Ce code affiche :
// "calling"
// (attend 2 secondes)
// "resolved"
