
// Walking throw the DOM //

// ID //

// const root = document.getElementById("root");
// console.log(root);

// root.style.backgroundColor= "yellow"

// const header2 = document.getElementById("header2")
// console.log(header2)
// header2.textContent = "Welcome to DOM"

// //Tag Name//

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// // Class Name //

// const h2css = document.getElementsByClassName("divcss");
// console.log(h2css);

// const body = document.body;
// console.log(body);

// querySelector - naming of CSS property #id .class h2 //

// const _root = document.querySelector("#root");
// console.log(_root);

// const _div = document.querySelector("h2#header2");
// console.log(_div)

// const _divs = document.querySelectorAll("h1.divcss");

// console.log(_divs);

// // Add element to the DOM //

// const myPtag = document.createElement("p");
// myPtag.innerText = "Lorom epsum dolor sit amet"

// const myMainDiv = document.getElementById("main");
// myMainDiv.appendChild(myPtag);

let users = [
    {id: 1, name: "John", email: "ggg@gmail.com"},
    {id: 2, name: "Marry", email: "ggg@gmail.com"},
    {id: 3, name: "Pourte", email: "ggg@gmail.com"}
];

function addUserToDOM(arr) {
    const root = document.querySelector("#root");

    for (const user of arr) {
        const div = document.createElement("div");
        div.classList.add("box");


        const h2 = document.createElement("h2");
        h2.textContent = user.name;
        h2.style.color = "red";
        div.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = user.email;
        div.appendChild(p);

        root.appendChild(div);
    }
}

addUserToDOM(users);


// for (const id in users){
//     console.log(id, users[id]);
// }