// Async in JS //

// function getX() {
//     setTimeout(() => {
//         return 5;
//     }, 2*1000);
// }

// function getY(callback) {
//     setTimeout(() => {
//         callback(6);
//     }, 5*1000);
// }

// function getXY() {
//     let x = getX();
//     console.log("x=>", x);
//     let y = getY();
//     console.log("y=>", y);
//     console.log("x+y=>", x + y);
// }

// getXY()

// // Callback //

// function myCallBack() {
//     console.log("I am a callback function");
// }

// function execCallBack(func) {
//     func()
// }

// execCallBack(() => {
//     console.log("I am a callback function");
// })

//Make Tea///

// function boilWater(callback) {
//     console.log("Boiling water...");
//     setTimeout(() => {
//         callback("Hot water");
//     }, 5000);
// }

// function getTeaBag(callback) {
//     console.log("Getting tea bag...");
//     setTimeout(() => {
//         callback("Green tea");
//     }, 2000);
// }

// function makeTea(water, tea, callback) {
//     console.log("Making a nice cup of tea...");
//     setTimeout(() => {
//         callback(`Your cup of ${tea} with ${water} is ready !`);
//     }, 1000);
// }

// function prepareTea() {
//     boilWater((hotWater) => {
//         console.log("Water =>", hotWater);

//     getTeaBag((tea) => {
//         console.log("Tea =>", tea);

//     makeTea(hotWater, tea, (result) => {
//         console.log(result);

//             });
//         });
//     });
// }

// prepareTea();

//Promises //

 // Pending//
 // Fulfilled - Resolved//
 //Fulfilled - Rejected//

// let promise1 = new Promise((resolve, reject) => {
//     resolve("Hot water");
//     reject("Cold water");
// });

// console.log(promise1);

// promise1.then((a) => {
//     console.log(a);
// })
// .then((b) => {
//     console.log(b);
// })
// .catch(e =>{
//     console.log(e);
// })


// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(5);
//     }, 5* 1000);
// })

// console.log(p)

// p.then(val=> console.log(val))

// Obtenir X+Y //

// function getMyX() {
//     return new Promise(res => {
//         setTimeout(() => {
//             res(6);
//         }, 6 * 1000);
//     })
// }

// function getMyY() {
//     return new Promise(res => {
//         setTimeout(() => {
//             res(5);
//         }, 2 * 1000);
//     })
// }

// function getmyXY(){
//     getMyX().then((x) => {
//         console.log("x =>", x);
//     getMyY().then((y) => {
//         console.log("y =>", y);
//         console.log("x + y =>", x + y);
//         })
//         .catch((e) => { console.log("Error:", e);})
//     });
// }

// getmyXY();


// Flip a coin //

// const flip = () => {
//     const coin = Math.floor(Math.random() * 2);
//     return coin === 0 ? "Head" : "Tail";
// }

// const flipcoin = new Promise((res,rej) => {
//     setTimeout(() => {
//         const result = flip();


//         if (result === "Head") {
//             res("You win: " + result);
//         } else {
//             rej("You lose: " + result);
//         }
//     }, 3 * 1000);
// });

// flipcoin.then((result) => {
//     console.log(result);
// }).catch((res) => {
//     console.log(res);
// });

// Static Methods //

// Promise.resolve / Promise.reject //

// console.log(Promise.resolve(5));

// function getX() {
//     return Promise.resolve(5)
// }

// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()


const p1 = Promise.resolve("Resolved 1");
const p2 = Promise.reject("Rejected 2");
const p3 = Promise.resolve("Resolved 3");

let arrayOfPromises = [p2, p1, p3];
//console.log(arrayOfPromises);

Promise.all(arrayOfPromises)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log("One or more promises rejected:", e);
});

