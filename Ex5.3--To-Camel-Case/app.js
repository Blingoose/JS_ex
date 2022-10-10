//? Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//? The first word within the output should be capitalized only if the original word was capitalized
//? (known as Upper Camel Case, also often referred to as Pascal case).
//? Examples
//? toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//? toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

//checking for emtpy string.
function isEmpty(str) {
  if (str === undefined) return true;
}

function camelCase(str) {
  if (isEmpty(str)) {
    return "Empty string is not allowed.";
  }
  const check = ["-", "_"];
  const firstLetter = str.charAt(0);
  let word = str.toLowerCase().split("");
  let count = 0;
  //checking for dash/underscore and replacing them. If no dash/underscore found, print the word as is.
  for (let i = 1; i < str.length; i++) {
    if (check.indexOf(str[i]) > -1) {
      word[i] = "";
      word[i + 1] = "" + word[i + 1].toUpperCase();
    } else if (check.indexOf(str[i]) < 0) {
      count++;
      if (count === str.length - 1) {
        return "Word does not contain dashes(-) or underscores(_).";
      }
    }
  }
  //checking the first letter for upper/lower & making sure that non A-Za-z aren't used.
  if (
    firstLetter === firstLetter.toUpperCase() &&
    firstLetter !== firstLetter.toLowerCase()
  ) {
    word[0] = word[0].toUpperCase();
    return word.join("");
  } else if (
    firstLetter === firstLetter.toLowerCase() &&
    firstLetter !== firstLetter.toUpperCase()
  ) {
    return word.join("");
  } else return "Error: first character must be A-Z or a-z.";
}
console.log(camelCase("The_Stealth_Warrior"));
console.log(camelCase("wHAT-IS_UP-HOMMIE"));
console.log(camelCase("_No-Dashes at the beginning"));
console.log(camelCase("@453he_Stealth_Warrior"));
console.log(camelCase());
console.log(camelCase("HElloWorld"));
console.log(camelCase("HEllo World"));
