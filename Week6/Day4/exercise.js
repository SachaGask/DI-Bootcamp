// 🌟 Exercise 1: CommonJS Modules
// products.js
const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
  { name: 'Phone', price: 500, category: 'Electronics' }
];
module.exports = products;

// shop.js
const products = require('./products');
function findProductByName(name) {
  const product = products.find(p => p.name === name);
  console.log(product || 'Product not found');
}
findProductByName('Laptop');
findProductByName('Book');


// 🌟 Exercise 2: ES6 Modules
// data.js
export const people = [
  { name: 'Alice', age: 30, location: 'NY' },
  { name: 'Bob', age: 40, location: 'LA' },
  { name: 'Carol', age: 35, location: 'Chicago' }
];

// app.js (ESM - run with `type: module` in package.json)
import { people } from './data.js';
function calculateAverageAge(arr) {
  const total = arr.reduce((sum, p) => sum + p.age, 0);
  console.log('Average Age:', total / arr.length);
}
calculateAverageAge(people);


// 🌟 Exercise 3: File Management (CommonJS)
// fileManager.js
const fs = require('fs');
module.exports.readFile = path => fs.readFileSync(path, 'utf-8');
module.exports.writeFile = (path, content) => fs.writeFileSync(path, content);

// app.js
const { readFile, writeFile } = require('./fileManager');
const content = readFile('Hello World.txt');
console.log('Read:', content);
writeFile('Bye World.txt', 'Writing to the file');


// 🌟 Exercise 4: Todo List (ES6 modules)
// todoApp/todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
  }
  add(task) {
    this.tasks.push({ task, done: false });
  }
  complete(index) {
    if (this.tasks[index]) this.tasks[index].done = true;
  }
  list() {
    this.tasks.forEach((t, i) => console.log(`${i + 1}. [${t.done ? 'x' : ' '}] ${t.task}`));
  }
}

// todoApp/app.js
import { TodoList } from './todo.js';
const myList = new TodoList();
myList.add('Do homework');
myList.add('Walk dog');
myList.complete(0);
myList.list();


// 🌟 Exercise 5: math-app
// math.js
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
module.exports = { add, multiply };

// app.js
const _ = require('lodash');
const { add, multiply } = require('./math');
console.log('Sum:', add(4, 5));
console.log('Product:', multiply(3, 6));
console.log('Max:', _.max([3, 5, 10]));


// 🌟 Exercise 6: npm-beginner
// app.js
const chalk = require('chalk');
console.log(chalk.blue('Hello') + ' ' + chalk.red.bold('World!'));


// 🌟 Exercise 7: file-explorer
// copy-file.js
const fs = require('fs');
const content = fs.readFileSync('source.txt', 'utf-8');
fs.writeFileSync('destination.txt', content);

// read-directory.js
const files = fs.readdirSync('.');
console.log('Files in directory:');
files.forEach(f => console.log(f));