
// ++++++++++++ Rest Operator ++++++++++

// function adding(name, ...arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;
//     }
//     console.log(`${name}: ${sum}`);
// }

// adding("Rest",1,2,3,4);


// +++++++++++++ Spread Operator ++++++++++++++++=

// let arr1 = [1,2,3,4];
// adding("Spread", ...arr1);

// console.log(...arr1); //it prints the values as normal values not array

// let arr2 = [...arr1]; //it creates a deep copy of the array
// arr1.push(5);
// console.log(`arr1: ${arr1}`);
// console.log(`arr2: ${arr2}`);

// let arr3 = [...arr1, ...arr2]; // concat arrays
// console.log(`arr3: ${arr3}`);

// let obj1 = {
//     name: "Pritam",
//     age: 23
// }
// let obj2 = {
//     fullname: "Uttam",
//     fullage: 43
// }

// let obj3 = {...obj1, ...obj2}
// console.log("obj3: ", obj3);

// ++++++++++++++ Destructuring Array ++++++++++++++++++

// let user = ["Pritam",,"Delhi"];
// let [name, age = 18, city] = user;
// console.log(name);
// console.log(age);
// console.log(city);

// ++++++++++++++ Destructuring Object ++++++++++++++++++

let obj1 = {
    fullName: "Pritam",
    age: 23
}

let { fullName, age=18 } = obj1;

console.log(fullName);
console.log(age);
console.log(obj1.fullName);