//? It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//? You're given one parameter, the original string.
//? You don't have to worry with strings with less than two characters.

//Test.
// const testString = "Hello";
// const result = testString.substring(1, testString.length - 1);
// console.log(result);

function trimStr(str) {
  if (typeof str !== "string") {
    return "Invalid input: empty trimStr() or non Strings not allowed.";
  } else if (str.length <= 1) {
    return "Must contain a string of 2 or more characters.";
  }
  return str.slice(1, -1);
}

console.log(trimStr("*Hello World*"));
