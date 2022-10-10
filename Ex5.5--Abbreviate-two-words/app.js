//? Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//? The output should be two capital letters with a dot separating them.
//? It should look like this:
//? Sam Harris => S.H
//? Patrick Feeney => P.F

function onlyLetters(str) {
  const test = str.split(" ").join("");
  return /^[a-zA-Z]+$/.test(test);
}

function initials(name) {
  if (typeof name !== "string") {
    return "Wrong Input!";
  } else if (!onlyLetters(name)) {
    return "Wrong Input: must contain only letters.";
  }
  const checker = name.split("");
  if (checker[checker.length - 1].includes(" ") || checker[0].includes(" ")) {
    return "You've left a space before the first or after the second word.";
  } else if (name.split(" ").length !== 2) {
    return "Enter a name that consists of 2 strings only.";
  }
  const result = name.split(" ").map((a) => {
    return a[0].toUpperCase();
  });

  return result.join(".");
}

console.log(initials("sam harris"));
console.log(initials("sam harris davidson"));
console.log(initials("sam harr15"));
console.log(initials("sam"));
console.log(initials("  sam  "));
console.log(initials(1234));
console.log(initials());
