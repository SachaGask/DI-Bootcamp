
//Ex1

// class Employee {
//     constructor(
//         private name: string,
//         private salary: number,
//         public position: string,
//         protected department: string,
//     ) {}

//     public getEmployeeInfo(): string {
//         return(`${this.name} is ${this.position}.`)
//     }
// }

// const John = new Employee("John", 2000, "Freelancer","Marketing")
// console.log(John.getEmployeeInfo())

//Ex2

// class Product{
//     constructor(
//         readonly id: number,
//         public name: string,
//         public price: number
//     ) {}

//     getProductInfo(){
//         return(`The price of the ${this.name} is ${this.price}$.`)
//     }
// }

// const lumiere = new Product(1, "luminaire", 30)
// lumiere.id = 5 //readonly cant be edited

// console.log(lumiere.getProductInfo())

//Ex3

// class _Animal {
//     constructor(
//         public name: string,
//     ){}

//     makeSound(){
//         return "Sound noise";
//     }
// }

// class Dog extends _Animal{

//     makeSound(){
//     return "Bark noise";
//     }

// }

// const Rex = new Dog("Rex")
// console.log(Rex.makeSound())

//Ex4

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 3));
console.log(Calculator.subtract(5, 3));

//Ex5

interface IUser {
    readonly id: number;
    name: string;
    email: string;
    membershipLevel?: number;
}

class User implements IUser {
    readonly id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class PremiumUser extends User {
    public membershipLevel: number;

    constructor(id: number, name: string, email: string, membershipLevel: number) {
        super(id, name, email);
        this.membershipLevel = membershipLevel;
    }
}

function printUserDetails(user: IUser): string {
    let details = `ID: ${user.id}, Nom: ${user.name}, Email: ${user.email}`;
    if (user.membershipLevel !== undefined) {
        details += `, Membership: ${user.membershipLevel}`;
    }
    return details;
}

const John = new PremiumUser(1, "John", "john@gmail.com", 3);
console.log(printUserDetails(John));