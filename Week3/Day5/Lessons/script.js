
// Scope //

// var a = 5
// var a = 9

// {
//     let a = 10;
//     console.log(a);
// }

// console.log(a);

// for(var i = 0; i < 2; i++){}
// console.log("i=>", i);

// Conditions if/else //

// let a = 5
// let c;

// if(a < 5){
//     c = 0;
// }else{
//     c = -1;
// }
// console.log("c=>", c);

// // Ternary operator - like a if statement//
// let d = (a < 5) ? 0 : -1;
// console.log("d=>", d);

// Template string //

// "str" + "str1"
// `str ${d}`

// let str1 = "abc"
// let str2 = `Welcome to the first ${str1} class`

// console.log(str2)

// Functions //

function name(params){

}

const _name = function(params){

}

constnameArrow = params => "abc"

// function main() {
//     //start your app
// }
// main()

//Self invoke function//

// console.log("Start...")
// (function(name){
//     console.log("Start..." + name)
// })("My app")

// ((param) =>{
//     console.log(param);
// })("with some param")

// Nasted function //
// function x(){
//     function y(){
//         let b = 5
//         return a + b
//     }
//     return y
// }

// let _x = x()("John")
// console.log((x)())

// const VAT = 1.18

// const addVAT = (vat) => {
//     const sum = (price) => {
//         return price * vat
//     }
//     return sum
// }
// Equivalent en une ligne:
const _addVAT = (vat) => (price) => price * vat;
// let totalPrice = addVAT(VAT)

// console.log(totalPrice(200));

// Value or Reference //

let param1 = 8;
let param2 = param1;
param2 = 10;
// console.log("param1=>", param1);
// console.log("param2=>", param2)

let obj1 = {param1: 8}
let obj2 = obj1;
obj2.param = 10;
// console.log("obj1=>", obj1);
// console.log("obj2=>", obj2);

let arr = [1,2,3]
let arr2 = arr;
arr[1] = 55;
// console.log(arr);
// console.log(arr2);

// Clone/Copy //

let obj3 = {...obj1}
obj3.param = 11

// console.log(obj1);
// console.log(obj3);

let arr4 = [].concat(arr);

let userJohn = {
    name: "John",
    age: 25,
    address: {
        city: "Tel Aviv"
    }
}

//create userAnne from userJohn - change all values

// let userAnne = {
//     ...userJohn,
//     name: "Anne",
//     age: 30,
//     address: {
//         ...userJohn.address,
//         //city: "Paris"
//     }
// };

// console.log(userJohn, userAnne);

// Object //

// let _c = "city";
// let _n = "name";
// let _a = "age";

// let myObj = {
//     [_n]: "Marry",
//     [_a]: 33,
//     [_c]: "Tel Aviv"
// };
// // myObj.name = "Ggg"
// // myObj["name"] = "JJJ"

// // Compputer/Dynamic //

// console.log(myObj[_n])

// for (let x in myObj){
//     console.log(x, myObj[x])
// }

let sname = "John"
let age = 23

let student = {
    sname,
    age
}
console.log(student)

function createUser(name, grade){
    return {name, grade}
}

let user1 = createUser("John", 85)
console.log(user1)