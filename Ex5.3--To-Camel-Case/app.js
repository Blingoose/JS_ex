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
  const word = str.toLowerCase().split("");
  //checking for dash/underscore and replacing them.
  for (let i = 1; i < str.length; i++) {
    if (check.indexOf(str[i]) > -1) {
      word[i] = "";
      word[i + 1] = "" + word[i + 1].toUpperCase();
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
console.log(camelCase("@453he_Stealth_Warrior"));
console.log(camelCase());
