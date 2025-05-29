
// Get element //

// const img = document.querySelector("img");
// console.log(img)

// img.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357"
// img.width = "200"
// img.style.border = "1px solid red"

// Set attributes //

// let imgSrc = img.getAttribute("style")
// console.log(imgSrc);

// const root = document.getElementById("root")
// console.log(root.getAttribute("numberdiv"))
// root.setAttribute("isnksnjbsjebriuez","qsbqkbdkqxnqkd")

// Children //

// const root = document.getElementById("root")

// console.log(root.children[0].innerText)

// console.log(root.firstElementChild, root.lastElementChild);

// console.log(root.parentNode);

// const h2 = root.children[0];
// console.log(h2.nextElementSibling.previousElementSibling);

// const h2List = root.getElementsByTagName("h2");
// console.log(h2List);


// let forms = document.forms.myform
// console.log(forms.elements.firstname);

// removeChild //

// const root = document.getElementById("root")
// const myimg = root.children[1]
// console.log(myimg)

// root.removeChild(myimg)

const root = document.getElementById("root");
const h2 = root.children[0];
const p = root.children[2];

// console.log(h2, p);

root.replaceChild(p, h2);
root.appendChild(h2);

// Exercises //

const span = document.querySelector("span");

console.log(span.previousSibling);
console.log(span.previousElementSibling);


// 4. Use the previousElementSibling / previousSibling  property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.

// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
// 2. Change the value of a node using nodeValue / innerText / innerHTML.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.

// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.