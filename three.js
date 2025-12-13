// Number Methods

function convert() {
  let a = "99";
  let num = Number(a);
  document.write(typeof a);
  document.write("<br>");
  document.write(typeof num);
  document.write("<br>");
}

function convertTwo() {
  let a = "99.54";
  let b = "56.23";
  let num = parseInt(a);
  let numTwo = parseFloat(b);
  document.write(`a = ${a} --- Type: ${typeof a}`);
  document.write("<br>");
  document.write(`num = ${num} --- Type: ${typeof num}`);
  document.write("<br>");
  document.write(`b = ${b} --- Type: ${typeof b}`);
  document.write("<br>");
  document.write(`numTwo = ${numTwo} --- Type: ${typeof numTwo}`);
  document.write("<br>");
}

function ceilMethod() {
  let a = Math.ceil(5.02);
  let b = Math.floor(0.92);
  let c = Math.round(5.5);
  let e = Math.min(1,2,3,4);
  let f = Math.floor((Math.random() * 9000) + 1000);
  document.write(`Ceil = ${a} --- Type: ${typeof a}`);
  document.write("<br>");
  document.write(`Floor = ${b} --- Type: ${typeof b}`);
  document.write("<br>");
  document.write(`Round = ${c} --- Type: ${typeof c}`);
  document.write("<br>");
  document.write(`Min = ${e} --- Type: ${typeof e}`);
  document.write("<br>");
  document.write(`Random = ${f} --- Type: ${typeof f}`);
  document.write("<br>");
}
