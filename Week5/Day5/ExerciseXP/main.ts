//Ex1

type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: "Alice",
    age: 30,
    street: "123 Rue Principale",
    city: "Paris"
};

console.log(personWithAddress);

//Ex2

function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else {
        return "This is a string";
    }
}

console.log(describeValue(42));
console.log(describeValue("hello"));

//Ex3

let someValue: any = 12345;
let strValue: string = String(someValue);
console.log("Longueur de la chaîne:", strValue.length);

//Ex4

function getFirstElement(arr: (number | string)[]): string {
    const first = arr[0];

    return (first as string) || String(first);
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([42, "hello", 99]));
console.log(getFirstElement(["foo", 100]))

//Ex5

function logLength<T extends { length: number }>(value: T): void {
    console.log("Longueur:", value.length);
}

logLength("Hello World");
logLength([1, 2, 3, 4]);

//Ex6

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
    }
}

const emp1: Employee = { name: "Sophie", age: 40, position: "Manager", department: "HR" };
const emp2: Employee = { name: "Alex", age: 28, position: "Developer", department: "IT" };
const emp3: Employee = { name: "Sam", age: 35, position: "Designer", department: "Design" };

console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
console.log(describeEmployee(emp3));

//Ex7

function formatInput<T extends { toString(): string }>(input: T): string {

    return `Formatted: ${(input as any).toString()}`;
}

console.log(formatInput(12345));
console.log(formatInput(true));
console.log(formatInput([1,2,3]));
console.log(formatInput("Hello"));