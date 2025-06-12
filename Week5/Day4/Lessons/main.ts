// // Default parameters //

// const addDefault = (a: number, b: number = 5): number => {
//   return a + b;
// }
// console.log(addDefault(10)); // 15

// // Create a function with 2 params //

// // @param - number
// // @ param - alias a string and number
// // return a string or a number as sum or concact


// type StringNumber = string | number;

// const sumOrConcat = (a: number, b: StringNumber): StringNumber => {
//     if (typeof b === 'string') {
//         return a + b + "";
//     }
//     return a + (b as number);
// }

// // Optional params //

// const addOptional = (a: number, b: number): number => {
//     // if typeof b === undefined) return a
//     return (a || 0) + (b || 0)
// };

// // Never type //

// const errorMessage = (message: string) => {
//     throw new Error(message)
// }

// const numberOrString = (value: number | string | undefined | boolean): string => {
//     if(typeof value === "string") return "this is a string"
//     if(typeof value === "number") return "this is a number"
//     return errorMessage("This is not a string or number")
// }

// const infinite =(): never => {
//     while(true){}
// }

// Function overload //

// function add(a: number, b: number):number;
// function add(a: string, b: string):string;
// function add(a: number | string, b: number | string): number | string {
//     if(typeof a === "string" && typeof b === "string") return a + b + "";
//     if(typeof a === "number" && typeof b === "number") return a + b;
//     return -1
//     }

// add(1,"2");
// add("d","4");

// Assertions of Casting //
// A keyword //

// type One = string;
// type Two = string | number;
// type Three = "Hello";

// let a: One = "Hi";
// let b = a as Two;
// let c = a as Three


// let d = <One>"abc"
// let e = <Two>"abc"
// let f = <Three>"Hello"

// DOM Elements //

// const myImg = document.querySelector("img")
// if(myImg) myImg.src = "/images/a.jpg"

// not null//

// const myImg2 = document.querySelector("img")!;
// myImg2.src = "/images/a.jpg"

// const myImg3 = document.querySelector("img") as HTMLImageElement;
// myImg3.src = "/images/a.jpg"

// const myImg4 = <HTMLImageElement>document.querySelector("img")


// const yearTag = document.getElementById("year") as HTMLSpanElement;
// const thisYear: string = new Date().getFullYear().toString();
// yearTag ? yearTag.textContent =thisYear : null;

// Classes //

class User {
    // public name: string;
    // private age:number;
    // protected active: boolean;

    constructor(public name: string, private age:number, protected active: boolean){
        this.name = name;
        this.age = age;
        this.active = active;
    }

getAge(): number {
    return this.age;
    }

get _active():boolean{
    return this.active
    }
}

const userJohn = new User("John", 27, true);
userJohn.name="Annie"
// console.log(userJohn.name);
// console.log(userJohn.getAge());
// console.log(userJohn._active);

class Student extends User {
    constructor(name: string, age: number, active: boolean) {
        super(name, age, active);
    }

getStudentAge(): string  {
    return this.name + this.getAge();
    }

isStudentActive(): string {
    return this.name + " is " + this.active;
    }
}

const stud1 = new Student("Anne", 22, true);
console.log(stud1.name);
console.log(stud1.getAge());
console.log(stud1._active);

console.log(stud1.isStudentActive());