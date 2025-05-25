
// /** JS Variables */

// /**
//  * var
//  * 
//  * ES6
//  * let
//  * const
//  */

// var username;
// username = "Sacha"
// console.log("Welcome", username);
// // let x = 10;
// // console.log(x);
// // x = 11;
// // console.log(x);
// const COLOR = "red"

// let a = 3, b = a, c =2
// // console.log(a+b+c)

// /** String */

// let str = "String"
// let str1 = "Str"
// let str2 =  `Backtick
// string
// is
// a
// string
// `

// let strs = str + "\n" + str1
// // console.log(strs);
// // console.log(str2);

// /** Length */
// let len = str2.length
// /* console.log("The len is", len);

// /** Index Of / lastIndexOf */

// let indx = str2.lastIndexOf("string")
// /* console.log(indx)

// /** toLowerCase / toUpperCase */

// /* console.log(str.toLowerCase());
// /** console.log(str.toLowerCase) */

// /** Numbers */

// let num1 = 5
// let num2 = 3

// let sum = num1 + num2;
// /* console.log(sum);

// /** Boolean */
// true
// false

// let bol = true
// const ISSAFE = false

// /** Null */
// let nu = null


// /** Comparison */

// /**
//  * =
//  * ==
//  * ===
//  */

// console.log(5 != "6") /* True */
// 5 === 5

// /** Operators */

// /**
//  * ++x
//  * 
//  * 
//  */

// let x = 2;
// x--;
// console.log(x);
// x += 1;
// x += 5;
// x = x + 5;
// x--;
// x++;

// let b = 3, d = b, u = b

// const tree = ++d * d*b * b++ +
// + --d+ + +b-- +
// + +d*b + +
// u 
// console.log(tree)


/** User Interface Function */

// let yesno = confirm("Are you going to the party ?")
// console.log(yesno)

// Array

// let arr = []
// let arr = [1, "a", "b", "abc", true]

// let arr1 = new Array()
// arr1[0] = "b"
// arr1[1] = "c"
// console.log(arr, arr1);
// console.log(arr[3])
// console.log(arr.length)
// arr.push("123")
// let abc = arr.pop()
// console.log(arr, abc);


// Join //
// console.log(arr.join(""))
// // Slice //
let fruits = ["banana","orange","kiwi","mango"]
// let arr2 = fruits.slice(1,3)
// console.log(arr2);
// console.log(fruits)

// Splice //

// let arr3 = fruits.splice(5,5)
// console.log(arr3);
// console.log(fruits)

// Object //

// let obj = {
//     name: "John",
//     age : 25,
//     grades: [90, 88, 75],
//     address: {
//         city: "Tel Aviv"
//     }
// };
// let obj1 = new Object();

// obj.name = "Anne"

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["grades"]);
// console.log(obj.address.city)

// Conditions //

// if
// else if
// else
// switch

let a = "a"
let b = 6
if (a === b) {
    console.log("5 equals 5")
}

else if (b > a){
    console.log("b greater than a")
}

else {
    console.log("not a true condition")
}

let page = "homepage";
switch (page) {
    case "homepage":
        console.log("home")
        break;
    case "about":
        console.log("about")
        break;
    case "contact":
        console.log("contact")
    default:
        console.log("404")
        break;
}