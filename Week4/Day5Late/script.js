
// Fetch

// @returns Promise
// response.json()
// response.text()

// fetch("https://zivush.github.io/emails.xml")
//   .then(res => {
//     return res.text();
//   })
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(e => {
//     console.error(e);
//   });

// document.getElementById("userForm").addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Form submitted");

//     let userId = event.target.elements.id.value;
//     console.log("UserID :", userId);

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((res) => res.json())
//         .then((user) => {
//             console.log(user);
//             render(user);
//         })
//         .catch((e) => console.log(e));
// }

// function render(obj) {
//     const div = document.createElement("div");
//     div.textContent = `${obj.name} - ${obj.email}`;
//     document.getElementById("root").appendChild(div);
// }

// function addUser(e) {
//     e.preventDefault();
//     let name = e.target.name.value;
//     let username = e.target.username.value;
//     let email = e.target.email.value;
//     fetch(`https://users-18kl.onrender.com/userjson`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ name, username, email })
//     })
//     .then((res) => res.json())
//     .then((users) => {
//         addUsersToPage(users);
//     })
//     .catch((e)  => {
//         console.error(e);
//     });
// }

// function addUsersToPage(arr) {
//     let html = arr.map((item) => {
//         return `<div>${item.name} - ${item.username} - ${item.email}</div>`;
//     });
//     document.getElementById("users").innerHTML = html.join("");
// }

// Async //

// function getX() {
//     return new Promise((res) => {
//         res(5)
//     })
// }

// async function _getX() {
//     //return 5
//     throw new Error("Oops, something went wrong");
// }

// _getX()
// .then(val => console.log(val))

// async function getXY() {
//     let x = await _getX();
//     console.log(x)
// }

// getXY();

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.error(e);
//     });

//     const userInfo = async() => {
//         try {
//             let res = fetch("https://jsonplaceholder.typicode.com/users");
//             let data = await res.json();
//         } catch(error) {
//             console.error("Error fetching user data:", error);
//         }
//     }
// userInfo()

const timeOut = (id => {
    return new Promise (res => {
        setTimeout(() => {
            res(id + " Done!");
        }, 2000);
        })
    })

async function calltimeOut() {
    console.log("Before, Done !")

    for (const item of ["first","second", "third"]) {
        console.log(await timeOut(item))
    }
    console.log("After, Done !")
}
calltimeOut();



