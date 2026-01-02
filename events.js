let btnOne = document.querySelector(".btnOne");
let btnTwo = document.querySelector(".btnTwo");
let mainContainer = document.querySelector(".mainContainer");
let boxStyle = document.querySelector(".box");
let body = document.querySelector("body");

// btnOne.onclick = (e) => {
//     let boxOne = document.createElement("div");
//     boxOne.innerHTML = `<h1>Hi i am learning DOM</h1>`;
//     mainContainer.append(boxOne);
//     console.log(e.type);
// }

const handlerOne = (e) => {
  let boxOne = document.createElement("div");
  boxOne.innerHTML = `<h1>Hi i am learning DOM</h1>`;
  boxStyle.append(boxOne);
  console.log(`Event Type: ${e.type} Event target: ${e.target}`);
};
btnOne.addEventListener("click", handlerOne);

const handlerTwo = (e) => {
  let boxOne = document.createElement("div");
  boxOne.innerHTML = `<h3>Hi i am learning DOM Two</h3>`;
  boxStyle.append(boxOne);
  console.log(`Event Type: ${e.type} Event target: ${e.target}`);
};
btnOne.addEventListener("click", handlerTwo);

const handlerThree = (e) => {
  let boxOne = document.createElement("div");
  boxOne.innerHTML = `<h3>Hi i am learning DOM Three</h3>`;
  boxStyle.append(boxOne);
  console.log(`Event Type: ${e.type} Event target: ${e.target}`);
};
btnOne.addEventListener("click", handlerThree);

btnOne.removeEventListener("click", handlerThree);

let currMode = "light";

btnTwo.addEventListener("click", (e) => {
  let boxOne = document.createElement("div");
  boxOne.innerHTML = `<h3>Hi i am learning DOM Two</h3>`;
  boxStyle.append(boxOne);
  console.log(`Event Type: ${e.type} Event target: ${e.target}`);
  if (currMode === "light") {
    boxStyle.setAttribute("class", "boxDark");
    currMode = "dark";
  } else {
    boxStyle.setAttribute("class", "box");
    currMode = "light";
  }
});

// let bodyMode = "light";
// let btnThree = document.querySelector(".btnThree");
// btnThree.addEventListener("click", (e) => {
//   if (bodyMode === "light") {
//     body.setAttribute("class", "dark");
//     bodyMode = "dark";
//   } else {
//     body.setAttribute("class", "light");
//     bodyMode = "light";
//   }
// });

// btnTwo.addEventListener("click", (e) => {
//   if (currMode === "light") {
//     boxStyle.style.backgroundColor = "black";
//     currMode = "dark";
//   } else {
//     boxStyle.style.backgroundColor = "white";
//     currMode = "light";
//   }
// });


let whiteTheme = document.querySelector(".whiteTheme");
let darkTheme = document.querySelector(".darkTheme");
let greenTheme = document.querySelector(".greenTheme");
whiteTheme.addEventListener("click", (e) => {
    body.setAttribute("class", "light")
});
darkTheme.addEventListener("click", (e) => {
    body.setAttribute("class", "dark")
});
greenTheme.addEventListener("click", (e) => {
    body.setAttribute("class", "green")
});