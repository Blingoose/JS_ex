//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function yesOrNo(bool) {
  bool === true
    ? console.log("Yes")
    : bool === false
    ? console.log("No")
    : console.log("not a boolean");
}

yesOrNo(false);
