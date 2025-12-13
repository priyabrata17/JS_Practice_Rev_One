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
  for (let i = 0; i < newArr.length; i++) {
    document.write(`Array: ${i + 1}`);
    for (let j = 0; j < newArr[i].length; j++) {
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
  for (let val of newArr) {
    document.write(`<li>${val}</li>`);
  }
  document.write("</ul>");
  newArr.sort().reverse();
  document.write("<h2>Sorted Descending</h2>");
  document.write("<ul>");
  for (let val of newArr) {
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
  let newArrTwo = [23, 34, 5, 66];
  let newArrThree = ["a", "b"];
  let concatedArr = newArr.concat(newArrTwo, newArrThree);
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

function sliceArr() {
  let newArr = ["Sanjay", "Yogesh", "Aman", "Bob", "John"];
  document.write(newArr);
  document.write("<br>");
  let sliced = newArr.slice(-4, -1); // negetive minus the value from array length & that will be the index number
  document.write(sliced);
  document.write("<br>");
}

function spliceArr() {
  let newArr = ["Sanjay", "Yogesh", "Aman", "Bob", "John"];
  document.write(`Original Array: ${newArr}`);
  document.write("<br>");
  document.write("<br>");
  let spliced = newArr.splice(-5, 0, "Jane"); // same as before minus from length and that will be the index number
  document.write(`After Spliced Array: ${newArr}`);
  document.write("<br>");
}

function indexOfArr() {
  let newArr = ["Sanjay", "Yogesh", "Sanjay", "Aman", "Bob", "John"];
  document.write(`Original Array: ${newArr}`);
  document.write(`<br>`);
  // let searchedVal = newArr.lastIndexOf("Sanjay");
  let searchedVal = newArr.indexOf("Sanjay");
  document.write(`Val at index: ${searchedVal}`);
}

function includesArr() {
  let newArr = ["Sanjay", "Yogesh", "Sanjay", "Aman", "Bob", "John"];
  document.write(`Original Array: ${newArr}`);
  document.write(`<br>`);
  let searchedVal = newArr.includes(
    prompt("Enter the name you want to search")
  );
  document.write(`Is Present: ${searchedVal}`);
}

function someArr() {
  let ageArr = [10, 12, 18, 23];
  document.write(`Original Array: ${ageArr}`);
  document.write(`<br>`);
  let matureAge = (age) => {
    return age >= 18;
  };
  let searchedVal = ageArr.some(matureAge);
  document.write(`Is Mature: ${searchedVal}`);
}

function findArr() {
  let ageArr = [10, 12, 19, 23];
  document.write(`Original Array: ${ageArr}`);
  document.write(`<br>`);
  let matureAge = (age) => {
    return age >= 18;
  };
  let searchedVal = ageArr.find(matureAge);
  document.write(`Is Mature: ${searchedVal}`);
}

function filterArr() {
  let ageArr = [10, 12, 19, 16, 23, 5, 82];
  document.write(`Original Array: ${ageArr}`);
  document.write(`<br>`);
  let matureAge = (age) => {
    return age >= 18;
  };
  let filtered = ageArr.filter(matureAge);
  document.write(`Filtered Array: ${filtered}`);
}

function toStringArr() {
  let newArr = ["Sanjay", "Yogesh", "Aman", "Bob", "John"];
  document.write(`Original Array: ${newArr}`);
  document.write(`<br>`);
  document.write(`Type Is: ${typeof newArr}`);
  document.write(`<br>`);
  let stringArr = newArr.toString();
  document.write(`String Array: ${stringArr}`);
  document.write(`<br>`);
  document.write(`Type Is: ${typeof stringArr}`);
}

function forEachArr() {
  let newArr = ["Sanjay", "Yogesh", "Aman", "Bob", "John"];
  document.write(`Original Array: ${newArr}`);
  document.write(`<br>`);
  newArr.forEach((val, index) => {
    document.write("<ul>");
    document.write(`<li> ${index + 1}.${val} </li>`);
    document.write("</ul>");
  });
}

function forInLoop() {
  let obj = {
    fname: "Ram",
    lname: "Kumar",
    age: 33,
  };

  for (key in obj) {
    document.write(`${key}: ${obj[key]}`);
    document.write("<br>");
  }
}

function mapMethod() {
    let arr = [1,2,3,4,5,6,7,8,9];
    document.write(`Original Arr: ${arr}`);
    document.write("<br>");
    let mappedArr = arr.map((val) => {
        return val*val;
    });
    document.write(`Mapped Array: ${mappedArr}`);
    document.write("<br>");
}
