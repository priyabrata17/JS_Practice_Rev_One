
// console.log(`1`);
// console.log(`2`);
// console.log(`3`);
// setTimeout((name) => {
//     console.log(`Hello World, ${name}`);
// }, 2000, "Pradip");
// console.log(`4`);

// for(let i=0; i<5; i++) {
//     let str = "";
//     for(let j=1; j<=5; j++) {
//         str+=j;
//     }
//     console.log(`${i} ${str}`);
// }

//++++++++++++++++++++++++++++ Callbacks ++++++++++++++++++++++++++++

// “When a callback requires arguments, we wrap the function call inside another function. It can be either a normal function or an arrow function. Arrow functions are only syntax sugar, not mandatory.”

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(`Data: ${dataId}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//     console.log(`getting data 2....`);
//     getData(2,() => {
//         console.log(`getting data 3....`);
//         getData(3, () => {
//             console.log(`getting data 4....`);
//             getData(4);
//         });
//     });
// });

//+++++++++++++++++++++ Promise [then-catch/promise chain] +++++++++++++++++++++++

// let promise = new Promise((resolve, reject) => {
//   console.log(`I am a Promise`);
//   resolve("Congratulation, Promise Fullfilled");
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!dataId || dataId <= 0) {
//         reject(`Something went wrong`);
//         // reject(new Error(`Invalid dataId`));
//         return;
//       }
//       console.log(`Data: ${dataId}`);
//       resolve(`Success`);
//     }, 2000);
//   });
// }

// console.log(`getting data 1......`);
// getData(1)
//   .then(() => {
//     console.log(`getting data 2......`);
//     return getData(2);
//   })
//   .then(() => {
//     console.log(`getting data 3......`);
//     return getData(3);
//   })
//   .then(() => {
//     console.log(`getting data 4......`);
//     return getData();
//   })
//   .then(() => {
//     console.log(`getting data 5......`);
//     return getData(5);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//++++++++++++++++++++ handle promise using async-await ++++++++++++++++++++++++++

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dataId || dataId <= 0) {
        reject(`Something went wrong`);
        // reject(new Error(`Invalid dataId`));
        return;
      }
      console.log(`Data: ${dataId}`);
      resolve(`Success`);
    }, 2000);
  });
}

// let result = async () => {
//     console.log(`getting data 1....`);
//     await getData(1);
//     console.log(`getting data 2....`);
//     await getData(2);
//     console.log(`getting data 3....`);
//     await getData(3);
//     console.log(`getting data 4....`);
//     await getData(4);
//     console.log(`Success`);
// }
// // result();

//++++++++++++++ IIFE ++++++++++++++++
async function getDataTwo(dataId) {
    setTimeout(() => {
      if (!dataId || dataId <= 0) {
        reject(`Something went wrong`);
        // reject(new Error(`Invalid dataId`));
        return;
      }
      console.log(`Data: ${dataId}`);
      resolve(`Success`);
    }, 2000);
}

(async () => {
  console.log(`getting data 1....`);
  await getData(1);
  console.log(`getting data 2....`);
  await getData(2);
  console.log(`getting data 3....`);
  await getData(3);
  console.log(`getting data 4....`);
  await getData(4);
  console.log(`Success`);
})();