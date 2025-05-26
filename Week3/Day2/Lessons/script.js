
// let sentence = "The movie is not bad, I like it.";

// let wordNot = sentence.indexOf("not")
// let wordBad = sentence.indexOf("bad");

// if(wordNot !== -1 && wordBad !== -1 && wordBad > wordNot){
//     let before = sentence.slice(0, wordNot);
//     console.log(before)

//     let after = sentence.slice(wordBad + 3);
//     console.log(after)

//     console.log(before + "good" + after);
// }
// else{
//     console.log(sentence);
// }

// Loops//

// let users = ["John","Marry","Anne"]
// // for(let i = 0; i < users.length; i+=2){
// //     console.log(i, users[i]);
// // }

// // For in //
// console.log("For in:");
// let obj = {
//     name: "John",
//     last: "Doe",
//     age: 25
// }
// for(let x in users){
//     console.log(x, users[x]);
// }

// for (const x in obj){
//     console.log(x, obj[x]);
// }

// // For of //
// console.log("For of:");
// for(let user of users){
//     console.log(user);
// }

// //While//

// let i = 0;
// while(i < 5){
//     console.log(i);
//     if (i === 2){
//         break;
//     }
//     i++;
// }

//Do While//

// let x = 0;
// do{
//     console.log("do => " + x);
//     x++;
// } while(x < 0);


// Functions //

// function logName(param1, param2){
//     console.log(param1, param2)
// }

// logName("Dan","Doe")

// function getFullName(firstname, lastname){
//     // return firstname + " " + lastname;
//     // return [firstname, lastname]
//     return {
//         name: firstname,
//         last: lastname
//     }
// }

// let val = getFullName("John","Doe");
// console.log(val);

// function sum(a = 2,b = 1){
//     return a + b
// }

// let somme = sum(undefined,undefined);
// console.log(somme);

// Function declaration - Hosting //

// let m = multi(5,5)
// console.log(m)

// function multi(a,b) {
// return a * b;
// }

//Function expression //
// const divide = function(a,b){
//     return a / b;
// };

// let d = divide(10,2);
// console.log(d)

// ES6 - Arrow Function //
// const minus = (a,b) => {
//     return a - b;
// }

// const minus1 = (a,b) => a - b

// const minus2 = a => a + 5

// const changeToLowerCase = (s) => s.toLowerCase()

// console.log(changeToLowerCase("ABC"))

