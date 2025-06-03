/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method 
*  Try not to use chatGPT :)
*/


// Exercise //

// function reverseWord(str){
//     let ret = " "
//     for (let i = str.length - 1; i >= 0; i--) {
//         ret += str[i]
//     }
//     return ret
// }

// function reverseAll(str){
//     let arr = str.split("");
//     let ret = []
//     for(const x of arr){
//         ret.push(reverseWord(x))
//     }
//     return arr.join("")
// }

// console.log(reverseAll("word in a given String"))


// Lesson //

for (let i = 0; i< 2; i++) {}

for (const x of [1,2,3]){}

for (const i in [1,2,3]){}

for (const i in {a:1, b:2}){}

const users = ["John", "Marie", "Dan", "Anne"]

// let arr = [] 
// for (const x in users){
//     arr.push(users[x] + "@gmail.com")
// }

// users.forEach((item, i) => {
//     console.log(i, item);
//     arr.push(item + "@gmail.com");
// });
// console.log(arr);


// Exercise //

// function map(arr){
//     let result = [];
//     arr.forEach((item) => {
//         result.push(item * 2);
//     });
// return result;
// }

let arr2 = [1,2,3,4]

// let resultArr = arr2.map((item, i) => {
//     if(item > 2) return item * 2
// })
// console.log(resultArr);

// function filter(arr) {
//     let result = [];
//     arr.forEach((item) => {
//         if (item > 2) result.push(item * 2);
//     });
//     return result;
// }
// console.log(filter([1, 2, 3, 4]));

// Filter
// @returns

// let filterArr = arr2.filter((item) => {
// return (item > 2)
// })

// console.log(filterArr);

let newUsers = [
    {id: 1, name: "John", email: "JOhn@gmail.com"},
    {id: 2, name: "Marie", email: "Marie@gmail.com"},
    {id: 3, name: "Anne", email: "Anne@gmail.com"},
    {id: 4, name: "Or", email: "Or@gmail.com"},
]

// Filter the object with "a" in case

// const aUsers = newUsers.filter((item) => {
//     return (
//         item.name.toLowerCase().includes("a") &&
//         item.email.toLowerCase().includes("a")
//     );
// });

// console.log(aUsers);


// function filter(arr) {
//     let result = [];
//     arr.forEach((item) => {
//         if (item > 2) result.push(item * 2);
//     });
//     return result;


