//? Your task is to create a function that does four basic math calculations.
//? The function should take three arguments - operation(string/char), value1(number), value2(number).
//? The function should return result of numbers after applying the chosen operation.
//? Examples:
//? basicOp('+', 4, 7)   // Output: 11
//? basicOp('-', 15, 18)   // Output: -3
//? basicOp('*', 5, 5)   // Output: 25
//? basicOp('/', 49, 7)   // Output: 7

// Operation functions.
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

//Main calc func
function calculator(num1, operator, num2) {
  let charCode = operator.charCodeAt();
  if (
    (charCode !== 47 &&
      charCode !== 43 &&
      charCode !== 42 &&
      charCode !== 45) ||
    operator.split("").length > 1
  ) {
    return `Not valid operator. Operator must be in double quotes like so "+" "-" "*" "/"`;
  } else {
    if (operator === "+") {
      return add(num1, num2);
    }
    if (operator === "-") {
      return subtract(num1, num2);
    }
    if (operator === "*") {
      return multiply(num1, num2);
    }
    if (operator === "/") {
      return divide(num1, num2);
    }
  }
}

console.log(calculator(100, "*", 20));
