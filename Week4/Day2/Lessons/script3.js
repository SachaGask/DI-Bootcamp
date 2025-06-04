//Ex1

let arr = [2,4,9,4,9,1,9]

function birthdayCakeCandles(arr){
    let maxnum = Math.max(...arr)
    let filternum = arr.filter( num => num === maxnum)
    return filternum.length
}

console.log(birthdayCakeCandles(arr))

//Ex2

const findIntersection = (arr) => {
    let arr1 = arr[0].split(",");
    let arr2 = arr[1].split(",");
    
    return arr1.filter(value => arr2.includes(value));
};

let liste = ["1,2,5,6,7", "2,5,7,8,15"];
console.log(findIntersection(liste));
