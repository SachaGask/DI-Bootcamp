//JSON//

let user = {
    id: 1,
    name: "Jean Dupont",
    username: "Bret",
    email: "sacha@mail.com",
    age: undefined,
    getName: function() {

    }
};

console.log(user);

// JSON.stringify(obj)

const filterMyJson = (key, value) => {
    if (key === "password") return undefined;
    if (key === "id") return "*****";
    return value;
}

let userJson = JSON.stringify(user, null, 2)
console.log(userJson);

// JSON Parse //

//console.log(JSON.parse(userFromJson));

let str = "abc"

console.log(JSON.stringify(str))

// Exceptions //


// console.log("Before")

// try {
//     a;
// } catch(e){
//     console.log(e)
// }

// console.log("After")

function x(num) {

    if (num === undefined){
        throw new Error("Num is undefined");
    }
    let a = 8
    try {
        return num * a
    } catch(e) {
        throw new Error("Something went wrong !")
    }
}

console.log(x(8))

function y() {
    try{
        x(2)
    }
    catch(e){
        console.log(e)
    }
}