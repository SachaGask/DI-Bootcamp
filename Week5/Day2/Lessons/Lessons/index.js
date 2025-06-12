console.log("line 1--3"); // 1 -- sync

setTimeout(() => {
    console.log("line 4--1 --> macrotask");
}, 0);

let p = Promise.resolve();
p.then((ret) => console.log("line 8--2 --> microtask"));

console.log("line 10--1"); // 2 -- sync

setTimeout(() => console.log("line 12--2"));

new Promise((res) => {
    console.log("line 15--3"); // 3 sync
    res();
}).then(() => console.log("line 20--4 --> microtask"));

console.log("line 19--5"); // 4

// call stack -- run regular as sync
// Microtask -- Promises / Async -- higher priority queue
// --> run after stack is empty
// Macrotask -- task queue -- lower priority -- run after microtask