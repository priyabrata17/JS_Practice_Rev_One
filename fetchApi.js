let URL = "https://jsonplaceholder.typicode.com/posts";

// let promise = fetch(URL);
// console.log(promise);

// let result = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(URL)
//         .then((res) => {
//           return res.json();
//         })
//         .then((res) => {
//           return resolve(res);
//         })
//         .catch((err) => reject(err));
//     }, 4000);
//   });
// };

// result()
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

let result = () => {
  setTimeout(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, 2000);
};

let resultTwo = async () => {
  let res = await fetch(URL);
  let data = await res.json();
  console.log(data);
};

resultTwo();

let facts = document.querySelector(".facts");
let button = document.querySelector(".btn-info");
let container = document.querySelector(".container");

button.addEventListener("click", async () => {
  let res = await fetch(URL);
  let data = await res.json();
  let tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    // let list = document.createElement("ul");
    // list.innerHTML = `<li>${data[i].id}</li><li>${data[i].title}</li><li>${data[i].body}</li>`
    // container.append(list);
    //     if (i%2 === 0) {
    //       tableBody.innerHTML += `
    //   <tbody>
    //     <tr class="table-warning">
    //       <td>${data[i].id}</td>
    //       <td>${data[i].title}</td>
    //       <td>${data[i].body}</td>
    //     </tr>
    //   </tbody>`;
    //     } else {
    //       tableBody.innerHTML += `
    //   <tbody>
    //     <tr class="table-danger">
    //       <td>${data[i].id}</td>
    //       <td>${data[i].title}</td>
    //       <td>${data[i].body}</td>
    //     </tr>
    //   </tbody>`;
    //     }
    tableBody.innerHTML += `
   <tbody>
     <tr>
       <td>${data[i].id}</td>
       <td>${data[i].title}</td>
       <td>${data[i].body}</td>
     </tr>
   </tbody>`;
  }
});
