
//Ex1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function choice(colors) {
//     colors.forEach((color, index) => {
//         console.log(`${index + 1}# choice is ${color}.`);
// });
// }

// choice(colors);

// Ex2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// function iteration(colors) {
//     colors.forEach((couleur, index) => {
//         const suffix = (index + 1 === 1) ? ordinal[1]
//                     : (index + 1 === 2) ? ordinal[2]
//                     : (index + 1 === 3) ? ordinal[3]
//                     : ordinal[0];

//         console.log(`${index+1}${suffix} choice is ${couleur}.`);  
//     });
// }

// iteration(colors)


//Ex3

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// //Output: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
// const country = "USA";
// console.log([...country]);

// //Output: ["U","S","A"]

// let newArray = [...[,,]];
// console.log(newArray);

//Output: [undefined, undefined]

//Ex4

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);


const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents);

//Ex5

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, word) => acc + ' ' + word);

console.log(sentence);

//Ex6

const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

const passedStudents = students.filter(student => student.isPassed);

console.log(passedStudents);
