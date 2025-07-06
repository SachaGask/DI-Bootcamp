// console.log("Welcome to Node JS");

// nodemon = --watch

// for (let i = 0; i > 5 ; i++) {
//   console.log(i);
// }

// npm axios
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.error(e));

// NodeJS Module System //

// NodeJS Module System
// 1 * Module that you create
// 2 * NPM - Node Package Manager
// 3 * Core Module - FS, HTTP, and mode

// const greeting = (name) => {
//     return `Welcome to Node JS ${name} !`
// }

// // console.log(greeting("John"));

// module.exports = greeting;

// const hello = (name) => {
//     return `Hello ${name}`;
// }

// module.exports = {greeting, hello};



// const {multi,divide,plus,minus} = require("./math/math.js");
// import {multi,divide,plus,minus} from "./math/math.js";
// import ten from "./math/math.js";

// console.log(ten);

// console.log(multi(2,3));
// console.log(divide(6,3));
// console.log(plus(2,3));
// console.log(minus(5,3));

// import axios from 'axios';
// const data = await axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(data);

const users = await fetchdata("https://jsonplaceholder.typicode.com/users");
console.log(users);