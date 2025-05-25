
const people = ["Greg", "Mary", "Devon", "James"];

ex1_1 = people.splice(1,1)
console.log(people)

ex1_2 = people[people.indexOf("James")] = "Jason";
console.log(people)

ex1_3 = people.push("Sacha")
console.log(people)

ex1_4 = people.indexOf("Mary")
console.log(ex1_4)

ex1_5 = people.slice(0,3)
console.log(ex1_5)

ex1_6 = "Foo"
console.log(ex1_6.indexOf())

ex1_7 = last = people[people.length - 1]
console.log(last)

// Ex2

colors = ["blue","green","purple","yellow","pink"]

//Loops ?

// Ex4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.numberOfRoomsAndRent.dan[0])


// Ex5: Loop

