
// function btnClick(e){
//     console.log(e.target);
//     console.log("Button was click");
//     e.target.style.display = "none"
// }

// function getValueFromInput(e){
//     console.log(e.target.value);
//     const inpt = document.querySelector("input");
//     console.log(inpt.value);
// }

// function changeHeaderOnMouseHover(e){
//     e.target.style.color = "red";
// }

// function changeHeaderOnMouseLeave(e){
//     e.target.style.color = "blue";
// }

// const btn = document.getElementById("btn");
// console.log(btn);

// // btn.addEventListener("click", function(event){
// //     console.log(event.target);
// //     changeColor(event.target, "pink");

// // })

// const changeColor =(elem, color) => {
//     elem.style.backgroundColor = color;
// }

// function handleSubmit(e){
//     e.preventDefault();
//     let form = e.target;
//     // console.log(form);
//     // let input = form.name
//     // console.log(input.value);
//     console.log(e.target.fname.value);
//     //console.log(document.forms.myform.fname.value);
// }

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const btn1 = document.getElementById("btn1");

console.log(div1);


div1.addEventListener("click", (e) => {
    console.log("div1 was clicked")
},false)

div2.addEventListener("click", (e) => {
    console.log("div2 was clicked")
},false)

btn1.addEventListener("click", (e) => {
    console.log("btn1 was clicked")
    e.stopPropagation();
},false)