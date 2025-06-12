
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

// class Calculator {
//     private a: number;
//     private b: number;

//     constructor(
//         a: number,
//         b: number
//     ) {
//         this.a = a;
//         this.b = b;
//     }

//     add(): number {
//         return this.a + this.b;
//     }

//     subtract(): number {
//         return this.a - this.b;
//     }
// }

// const calc = new Calculator(5,3);
// console.log(calc.add());
// console.log(calc.subtract());

//Ex5

class User {
    readonly id: number;
    public name: string;
    public email: string;

    constructor(
        id: number,
        name: string,
        email: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class PremiumUser extends User {
    private membershipLevel: number

    constructor(
        id: number,
        name: string,
        email: string,
        membershipLevel: number
    ) {
        super(id, name, email);
        this.membershipLevel = membershipLevel;
    }

        printUserDetails(): string {
        return `ID: ${this.id}, Nom: ${this.name}, Email: ${this.email}, Membership: ${this.membershipLevel}`
    }
}

const John = new PremiumUser(1,"John","john@gmail.com",3)
console.log(John.printUserDetails())
