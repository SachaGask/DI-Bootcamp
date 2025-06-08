
//Ex1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(num + " is less than or equal to 10");
    } else {
      reject(num + " is greater than 10");
    }
  });
}

//Ex2

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("succès");
  }, 4000);
});

promise.then(result => {
  console.log(result); // Affichera "succès" après 4 secondes
});

//Ex3

const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => {
  console.log("Résolu avec :", value); // Résolu avec : 3
});

const rejectedPromise = Promise.reject("Bouh !");

rejectedPromise.catch(error => {
  console.log("Rejeté avec :", error); // Rejeté avec : Bouh !
});

