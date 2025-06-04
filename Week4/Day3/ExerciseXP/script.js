
//Ex1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada, Latitude(49.2827), (-123.1207)

//Ex2

// function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

//Ex3

const users = { user1: 18273, user2: 92833, user3: 90315 }

const newusers = Object.entries(users)
console.log(newusers)

const doubledUsers = newusers.map(([key, value]) => [key, value * 2]);
console.log(doubledUsers);

//Ex4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// object

//Ex5

class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//Ex6

// 1
// false
// false

//2

// const object1 = { number: 5 }; //5
// const object2 = object1; //5
// const object3 = object2; //5
// const object4 = { number: 5}; //5

// object1.number = 4;
// console.log(object2.number) //4
// console.log(object3.number) //4
// console.log(object4.number) //5

//3

//new Animal = ["Doggo","Dog", "Black"]

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color, soundMake) {
    super(name, type, color);
    this.soundMake = soundMake;
    }

    farmerCow(){
        console.log(`${this.soundMake} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
    }
}

const cow = new Mamal("Doggo", "Dog", "Black", "Woof");
cow.farmerCow();