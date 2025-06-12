
// Type number //

let num = 1
num = 4
num = "abc"


// Type string //
let str: string = "abc"
str = 0


// Type boolean //
let bol: boolean;
bol = true
bol = 0


// Type any //
let a: any;
a = 0;
a = "a";
a = true;
a = {}
a = [];

// Type array //
let arr: string[] = ["1", "2", "3"];
arr.push("100")

let arrStrNum: (string | number)[] = [];
arrStrNum[0] = 1
arrStrNum.push("a")

// Type tuple //
let myTuple: [string, number, string, boolean]
let arr1: myTuple= ["a", 1,"str",false];


// Type object //
let obj: object = {}
obj = []
console.log(typeof [])

const user = {
    name: "John",
    age: 25
}
user.age = 26 


// Type //

type MyString = string | number;
let url: MyString = "http..."
let url1: string = "http..."

type User = {
    name: string;
    age: number;
    gender?: string | number;
};

// let userJohn: User = {
//     name: "John",
//     age: 25
// };

// userJohn.gender = "M";

// let userJane: User = {
//     name: "Jane",
//     age: 30
// };

// let userMarie: User = {
//     name: "Marie",
//     age: 28,
//     gender: "F"
// }


// Interface //

type NewUser = User | string;

interface UserI {
    name: string;
    age: number;
    gender?: string | number;
}

let userDan: UserI = {
    name: "Dan",
    age: 22,
    gender: "M"
}

// Enum Types //

enum Grade {
    U = "60",
    D = "70",
    C = "80",
    B= "90",
    A="100"
}

console.log(Grade.A);

// Literal Types //

type status = "failed" | "loading" | "success";

let statuscode: status;

statuscode = "failed";

// Aliases Types //

type NumberOfString = number | string | null;
type NumberOfSTringOrBoolean = NumberOfString | boolean;

type Student = {
    name: string,
    age: number,
    gender: NumberOfSTringOrBoolean,
    status: status
    grade: Grade
}

let stud1 : Student = {
    name: "John",
    age: 25,
    grade: Grade.A
}