function intro() {
  console.log("hello world");
}
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}

function Calculator(num1, num2, operation) {
  let val = operation(num1, num2);
  return val;
}

intro();

let i = Calculator(4, 5, add);
console.log(i);

// these updated
function local() {
  console.log("I am Git hub");
}
local();
