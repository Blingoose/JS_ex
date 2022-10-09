//? Write a function called repeat_str which repeats the given string src exactly count times.
//? repeatStr(6, "I") // "IIIIII"
//? repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Version 2.
// function repeatString2(str, n) {
//   let repeated = "";
//   for (let i = 0; i < n; i++) {
//     repeated += str;
//   }
//   return repeated;
// }
// console.log(repeatString2("Yo", 8));

function repeatString(str, n = 1) {
  if (
    typeof str !== "string" ||
    typeof n !== "number" ||
    str.length < 1 ||
    n <= 0
  ) {
    return "Invalid input. Example of valid input ---> ('string', n=8)  n > 0";
  }
  return str.repeat(n);
}

console.log(repeatString("Out-Get", (n = 10)));
