//Ex1

console.log("Hello, World!");

//Ex2

let age: number = 30;
let name: string = "Alice";

console.log("Name:", name);
console.log("Age:", age);

//Ex3

let id: string | number;

id = "abc123";
console.log(id);

id = 101;
console.log(id);

//Ex4

function checkNumber(n: number): string {
  if (n > 0) return "Positive";
  else if (n < 0) return "Negative";
  else return "Zero";
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-3));  // Negative
console.log(checkNumber(0));   // Zero

//Ex5

function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

const details = getDetails("Alice", 25);
console.log(details); // ['Alice', 25, 'Hello, Alice! You are 25 years old.']

//Ex6

type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person = createPerson("Bob", 40);
console.log(person);

//Ex7

const inputElement = document.getElementById("myInput") as HTMLInputElement;

if (inputElement) {
  inputElement.value = "TypeScript is awesome!";
}

//Ex8

function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));

//Ex9

function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello!";
}

console.log(greet());
console.log(greet("Sacha"));

