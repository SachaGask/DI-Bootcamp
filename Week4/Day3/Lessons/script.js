
// Objects & Classes //

// let user = {
//     name: "John",
//     email: "jjj@gmail.com",
//     age: 25
// }

// console.log(user);

// // Get / Set //

// let value = user["name"]
// let value1 = user.age

// user.age = 25
// user["email"] = "j@test.com"

// let value2 = user.email

// user.address = {city:"Tel Aviv"}
// let value3 = user.address

// console.log(value, value1, value2)

// console.log(value3)

// // Loop on object //

// for (const x in user){
//     console.log(x, user[x])
// }

// To convert Object to an Array 
// Object.keys
// Object.values
// Object.entries

// let user = {
//     name: "John",
//     email: "jjj@gmail.com",
//     age: 25
// }

// let userKeys = Object.keys(user);
// console.log(userKeys);

// userKeys.forEach(key => {console.log(key, user[key])})

// let userValues = Object.values(user);
// console.log(userValues);

// userValues.forEach((value) => {console.log(value)});

// let userEntries = Object.entries(user);

// userEntries.forEach(([key, value]) => {console.log(key, value);});

// Object.fromEntries //

// let arr = [
//     ["name", "John"],
//     ["email", "jjj@gmail.com"],
//     ["age", 25]
// ]

// let johnUser = Object.fromEntries(arr);
// console.log(johnUser);

// Object destructuring //

// let user = {
//     name: "John",
//     email: "jjj@gmail.com",
//     age: 25,
//     address: {
//         city: "Tel Aviv"
//     }
// }

// let a = user.name
// let b = user.email
// let c = user["age"]

// let {name, age, email, address: { city }} = user
// console.log(user)

// function getuserInfo(obj){
//     const {name, age, email, address: {city}} = obj
//     return {name, age, email, city}
// }

// console.log(getuserInfo(user))


// Object Spreading //

// let userJohn = {
//     name: "John",
//     email: "jjj@gmail.com",
//     age: 25,
//     address: {
//         city: "Tel Aviv"
//     }
// };

// let userAnne = {...userJohn, name: "Anne", email: "anne@gmail.com", eyes: "blue"}
// console.log(userAnne)

// delete userAnne.eyes
// console.log(userAnne)

// let name = "Marie"
// let age = 26
// let gender= "female"
// let userMarie = {name, age: age + 5, gender}

// console.log(userMarie)

// This - What is this //

// let student = {
//     name: "Marie",
//     hello: function(){
//         console.log(this);
//         console.log(`Hello ${this.name}`);
//     }
// }

// student.hello();

// Class //

// class Animal {
//     constructor(paramName, paramType) {
//         this.name = paramName
//         this.type = paramType
//     }
//     voice() {
//         if(this.type === "Dog"){
//             return "Bark"
//         }
//         else if (this.type === "Cat"){
//             return "Meow"
//         }
//         else {
//             return "No voice found 404"
//         }
//     }
//     // Getter / Setter //
//     getName(){
//     return this.name;
//     }

//     setName(value){
//     //if(admin)
//     this.name = value;
//     }

//     set animalType(value){
//         this.type = value;
//     }

//     get animalType(){"Cat"
//     return this.type
//     }
// }

// class Dog extends Animal {
//     constructor(name, gender) {
//         super(name, "Dog");
//         this.gender = gender;
//     }

//     getGender() {
//         return this.gender;
//     }

//     voice() {
//         return "bark bark";
//     }
// }

// const myDog = new Dog("Kuku")

// console.log(myDog.voice())


// const myDog = new Animal("Shadow","Dog")
// const yourDog = new Animal("Spoty","Dog")
// const myCat = new Animal("Catcat","Cat")
// const myHorse = new Animal("Horsy", "Horse")

// console.log(myDog.name, yourDog.name, myCat.name, myHorse.name)

// console.log(myDog.voice())


// class Animal {
//     constructor(paramName, paramType) {
//         this.name = paramName
//         this.type = paramType
//     }
//     voice() {
//         if(this.type === "Dog"){
//             return "Bark"
//         }

class User {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends User {
    constructor(name, grade, year, uni) {
        super(name);
        this.grade = grade;
        this.year = year;
        this.university = uni;
    }

    getGrade() {
        console.log("Grade:", this.grade);
    }

    getYear() {
        console.log("Year:", this.year);
    }

    getUni() {
        console.log("University:", this.university);
    }
}

let arr = [
    new Student("Alex", 75, "3rd year", "MIT" ),
    new Student("Anna", 89, "1st year", "Reichman Uni" ),
    new Student("Daniel", 57, "5th year", "TLV Uni")
]

console.log(arr)
// arr.forEach(student => {
//     student.hello();
//     student.getGrade();
//     student.getYear();
//     student.getUni();
// });

