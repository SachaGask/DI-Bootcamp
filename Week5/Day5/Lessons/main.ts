//Ex1

// function greet(name: string, greeting: string = "Hello"): string {
//     return `${greeting} ${name}`
// }

// console.log(greet("Alice"));
// console.log(greet("Bob", "Hi"));

//Ex2

// function formatInput(input1: number, input2: string | number): string | number {
//     if (typeof input2 === "number") {
//         return input1 + input2;
//     } else {
//         return input1 + input2;
//     }
// }

// console.log(formatInput(3, 4))
// console.log(formatInput(3, " fois"))

//Ex3

// function multiplyOptional(a?: number, b?: number): number {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return 0;
//     }
//     return a * b;
// }

// console.log(multiplyOptional(3,4))
// console.log(multiplyOptional(3,0))

//Ex4

// function checkType(type: string | number | boolean | undefined): any {
//     if (typeof type === "string") {
//         return "string";
//     }
//     if (typeof type === "number") {
//         return "number"
//     }
//     throw new Error("Erreur wllh jsp il se passe quoi att")
// }

// console.log(checkType())

//Ex5

// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: number | string, b: number | string): number | string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     }
//     throw new Error("Les deux paramètres doivent être du même type (number ou string)");
// }

//Ex6

// const mainImg = document.querySelector("#main-img") as HTMLImageElement;
// mainImg.src = "cat.jpg";

//Ex7

class Animal {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

class Cat extends Animal {
    public color: string;

    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }

    meow(): string {
        return `Miaou, je suis ${this.name} et j’ai ${this.getAge()} ans`;
    }
}

const Egoz = new Cat("Egoz", 4, "white");

console.log(Egoz.meow());

