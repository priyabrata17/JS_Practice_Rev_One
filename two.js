function hello() {
  alert("Hello Everyone.");
}

function sums() {
  let arr = [10, 20, 30, 40, 50];
  let sum = 0;
  document.write(`<ul>`);
  for (let i = 0; i < arr.length; i++) {
    document.write(`<li> ${arr[i]} </li>`);
    sum += arr[i];
  }
  document.write(`</ul>`);
  document.write(`Total Sum: ${sum}`);
}

function createarr() {
  let newArr = new Array();
  for (let i = 0; i < 4; i++) {
    newArr[i] = prompt(`${i + 1}.Enter a new value:`);
  }

  document.write(newArr);
}

function mda() {
    let newArr = [
        ["Harry", 23, "BCom"],
        ["Bob", 33, "BTech"],
        ["Jane", 27, "BEd"],
    ];
    for(let i=0; i<newArr.length; i++) {
        document.write(`Array: ${i+1}`);
        for(let j=0; j<newArr[i].length; j++) {
            document.write("<ul>");
            document.write(`<li>${newArr[i][j]}</li>`);
            document.write("</ul>");
        }
    }
}

function sorting() {
    let newArr = ["Sanjay", "Yogesh", "Aman", "Bob"];
    newArr.sort();
    document.write("<h2>Sorted Assecending</h2>");
    document.write("<ul>");
    for(let val of newArr) {
        document.write(`<li>${val}</li>`);
    }
    document.write("</ul>");
    newArr.sort().reverse();
    document.write("<h2>Sorted Descending</h2>");
    document.write("<ul>");
    for(let val of newArr) {
        document.write(`<li>${val}</li>`);
    }
    document.write("</ul>");
}

function shiftMethod() {
    let newArr = ["Sanjay", "Yogesh", "Aman", "Bob"];
    document.write("<h2>Original</h2>");
    document.write(newArr);

    let modArr = newArr.shift();
    document.write("<h2>Modified</h2>");
    document.write(newArr);
}

function unShiftMethod() {
    let newArr = ["Sanjay", "Yogesh", "Aman", "Bob"];
    document.write("<h2>Original</h2>");
    document.write(newArr);

    let modArr = newArr.unshift("Rahul");
    document.write("<h2>Modified</h2>");
    document.write(newArr);
}

function concatArr() {
    let newArr = ["Sanjay", "Yogesh", "Aman", "Bob"];
    let newArrTwo = [23,34,5,66];
    let newArrThree = ["a","b"];
    let concatedArr = newArr.concat(newArrTwo,newArrThree);
    document.write(newArr);
    document.write("<br>");
    document.write(newArrTwo);
    document.write("<br>");
    document.write(newArrThree);
    document.write("<br>");
    document.write(concatedArr);
}

function joinArr() {
    let newArr = ["Sanjay", "Yogesh", "Aman", "Bob"];
    document.write(newArr);
    document.write("<br>");
    document.write(typeof newArr);
    document.write("<br>");
    let joined = newArr.join("-");
    document.write(joined);
    document.write("<br>");
    document.write(typeof joined);
}