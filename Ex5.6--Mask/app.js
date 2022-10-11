//? Usually when you buy something, you're asked whether your credit card number,
//? phone number or answer to your most secret question is still correct. However,
//? since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//? Your task is to write a function maskify, which changes all but the last four characters into '#'.
//? Examples
//? maskify("4556364607935616") == "############5616"
//? maskify("64607935616") == "#######5616"
//? maskify("1") == "1"
//? maskify("") == ""

// "What was the name of your first pet?"
//? maskify("Skippy") == "##ippy"
//? maskify("Nananananananananananananananana Batman!") == "####################################man!"

// Regex Explanation:
//* dot .
// Matches any character except linebreaks.

//* Positive Lookahead (?=) -->
// Matches a group after the main expression without including it in the result.
// Example: foobarbarfoo
// bar(?=bar) finds the 1st bar ("bar" which has "bar" after it.

//* Quantifier {}
// Matches the specified quantity of the previous token.
// {1,3} will match 1 to 3. {3} will match exactly 3. {3, } will match 3 or more.

function mask(input) {
  return input.replace(/.(?=.{4})/g, "#");
}

console.log(mask("1cxzczxczx xzcxzczxczxc zxcxzcxzcxzc zxcxzcxzc"));
console.log(mask("2874 4234 2546 3437"));
