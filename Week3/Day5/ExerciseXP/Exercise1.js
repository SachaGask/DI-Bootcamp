
// Ex1

// #1	not works
// #2	not works	
// #3	N/A
// #4	works	
// #5	works

// Ex2

// const winBattle = () => {
//     let experiencePoints;
//     if (true) {
//         experiencePoints = 10;
//         return experiencePoints;
//     } else {
//         experiencePoints = 1;
//         return experiencePoints;
//     }
// }

// const experiencePoints = winBattle();
// console.log(experiencePoints);

// Ex3

// function isString(input) {
//     if (typeof input === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// Ex4

// const arrowFunction = (nombre1, nombre2) => {return nombre1 + nombre2};

// console.log(arrowFunction(1,2))

// Ex5

// function fromGToKg(kilo){
//     console.log(`${kilo} kilo correspond à ${kilo * 1000} g`);
// }

// fromGToKg(1)


// const oneLine = (kilo1) => {console.log(`${kilo1} kilos correspond à ${kilo1 * 1000} g`)}

// oneLine(2)

//Ex6

// (function autoFunction(childs, partner, location, job){
//     console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${childs} kids.`)
// })(4,"Lisya","Tel Aviv","Web Developer");

//Ex7

// (function(username) {
//   const navbar = document.getElementById("navbar");

//   const userDiv = document.createElement("div");
//   userDiv.className = "user-info";

//   // Utilisation d'une image locale ou d'une image sans CORS
//   const imageURL = "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png";

//   userDiv.innerHTML = `
//     Bienvenue, ${username}
//     <img src="${imageURL}" alt="Photo de profil">
//   `;

//   navbar.appendChild(userDiv);
// })("John");

//Ex8

// function makeJuice(size){
//     function addIngredients(ingredient1, ingredient2, ingredient3){
//     const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
//     const orderDiv = document.getElementById("order");
//     orderDiv.textContent = message;

//     let ingredients = [];
//     ingredients.push(ingredient1, ingredient2, ingredient3);
//     console.log(ingredients)
//     }

//     addIngredients("banana","orange","kiwi")
//     addIngredients("strawberry", "orange", "mint");

// }

// makeJuice("small")


