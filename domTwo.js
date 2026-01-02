
// let headings = document.getElementsByClassName("headingClass");
// let headings = document.querySelector("#para");
// let div = document.querySelector("div");
// console.log(headings);
// console.log(headings.innerText);
// console.log(div.lastElementChild);
// console.log(div.innerText);
// // div.innerHTML = "<h1>Hello World</h1>";

// let headingTwo = document.querySelector(".headingClassTwo");
// headingTwo.innerText += " From Me!";

// // document.querySelector(".one").innerText = "One Edited"
// // document.querySelector(".two").innerText = "Two Edited"
// // document.querySelector(".three").innerText = "Three Edited"

// let boxes = document.querySelectorAll(".boxes");
// console.log(boxes);
// for(i=0; i<boxes.length; i++) {
//     boxes[i].innerText = `New Unique Value ${i+1}`;
// }

let div = document.querySelector(".box");
div.style.backgroundColor = "gold";
div.style.color = "black";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
div.append(newBtn);

let newHeading = document.createElement("heading");
newHeading.innerHTML = `<h3><i>New Heading</i></h3>`;
div.prepend(newHeading);
newHeading.remove();

let boxTwo = document.querySelector(".boxTwo");
let newBtnTwo = document.createElement("button");
newBtnTwo.innerText = "ClickMe!";
newBtn.style.backgroundColor = "#be0436ff";
newBtn.color = "white";
boxTwo.appendChild(newBtnTwo);

let paraTwo = document.querySelector(".paraTwo");
paraTwo.classList.add("paraTwoCopy");
paraTwo.setAttribute("id", "paraTwoId");
console.log(paraTwo.getAttribute("class"));
console.log(paraTwo.getAttribute("id"));
console.log(paraTwo.classList);