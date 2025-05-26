
// Ex1

// function displayNumbersDivisible(divisor){
//     let sum = 0
//     for (let i = 0; i <= 500; i++){
//         if (i % divisor === 0) {
//             console.log(i)
//             sum += i
//         }
//     }
//   console.log("Sum :", sum);
// }

// // displayNumbersDivisible();
// displayNumbersDivisible(3)

// Ex2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let fruits = ["banana","orange","apple"]

// function myBill(){
//     let total = 0;
//     for (let fruit of fruits){
//         if (stock[fruit] > 0) {
//             total += prices[fruit]
//             stock[fruit] -= 1
//         }
//     }
// console.log("Total à payer:", total, "€");
// }

// myBill()

// Ex3

// function changeEnough(itemPrice, amountOfChange){
//     let change = [0.25, 0.1, 0.05, 0.01]
//     let budget = 0
//     for (let i in change){
//         amountOfChange[i] *= change[i]
//         budget += amountOfChange[i]
//     }
//     if (budget >= itemPrice){
//         console.log("True");
//         return true;
//     }
//     else {
//         console.log("False");
//         return false;
//     }
// }

// changeEnough(0.75, [0,0,20,5])

//Ex4

// function hotelCost(){
//     let cost = 140
//     let input = prompt("How may nights you want to spend ?")
//     if (isNaN(input)){
//         return hotelCost();
//     }
//     else{
//     let total = cost * input
//     console.log(total)
//     return total
//     }
// }

// // hotelCost()

// function planeRideCost(){
//     let input = prompt("Ou tu veux aller frr ?")
//     if (isNaN(input)){
//         if (input === "Londres"){
//             console.log(input, "est au prix de 183€.")
//             return 183
//         }
//         else if (input === "Paris"){
//             console.log(input, "est au prix de 220€.")
//             return 220
//         }
//         else {
//             console.log(input, "est au prix de 300€.")
//             return 300
//         }
//     }
//     else {
//         return planeRideCost()
//     }
// }

// // planeRideCost()

// function rentalCarCost(){
//     let input = prompt("Combien de jours tu veux louer le bolide khouya ?")
//     if (isNaN(input)){
//         return rentalCarCost()
//     }
//     else {
//         let location = 40
//         let total = location * input
//         if (input >=10){
//             total = total * 0.9
//         }
//         console.log("Ca va te couter ", total, "€ chef.")
//         return total;
//     }
// }

// // rentalCarCost()

// function totalVacationCost(){
//     let hotel = hotelCost()
//     let plane = planeRideCost()
//     let car = rentalCarCost()
//     let total = hotel + plane + car
//     console.log("Tu vas halass au total:" , car,"+", plane, "+",hotel, "soit", total, "€")
//     return total
// }

// totalVacationCost()

// Ex5

const divs = document.getElementsByTagName("div");
console.log(divs);
for (const div of divs) {
  div.style.color = "red";
}

const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";
const div = document.createElement("div");

lists[1].children[1].remove();

for (const list of lists) {
    list.children[0].textContent = "Sacha";
    list.classList.add("student_list");
}

const firstList = document.querySelector("ul");
firstList.classList.add("university", "attendance");

const allLis = document.querySelectorAll("li");
for (const li of allLis) {
  if (li.textContent.trim() === "Dan") {
    li.style.display = "none";
  }
}

for (const li of allLis) {
  if (li.textContent.trim() === "Richard") {
    li.style.border = "2px solid black";
  }
}

document.body.style.fontSize = "18px";