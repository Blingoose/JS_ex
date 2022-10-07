//? Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//? Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//? Testing: [0, 0, 0, 1] ==> 1
//? Examples:
//? Testing: [0, 0, 1, 0] ==> 2
//? Testing: [0, 1, 0, 1] ==> 5
//? Testing: [1, 0, 0, 1] ==> 9
//? Testing: [0, 0, 1, 0] ==> 2
//? Testing: [0, 1, 1, 0] ==> 6
//? Testing: [1, 1, 1, 1] ==> 15
//? Testing: [1, 0, 1, 1] ==> 11
//? However, the arrays can have varying lengths, not just limited to 4.

arr = [0, 1, 1, 1, 1, 1, 1, 1];

//My favorite version---------------------------------------------------
const binaryToDecimal = (arr) => {
  let sum = 0;
  for (i = arr.length; i >= 0; i--) {
    if (arr[i]) {
      sum += 2 ** (arr.length - (i + 1));
    }
  }
  return sum;
};
console.log(binaryToDecimal(arr));

// Second Version using reverse and spread operator----------------------------------
const binaryToDecimal2 = (arr) => {
  let sum = 0;
  const newArr = [...arr].reverse();
  for (i = 0; i < arr.length; i++) {
    if (newArr[i]) {
      sum += 2 ** i;
    }
  }
  return sum;
};
console.log(binaryToDecimal2(arr));

//Dirty version---------------------------------------------------

const binaryToDecimal3 = (arr) => {
  let sum = 0;
  arr.reverse().forEach((e, i) => (e ? (sum += 2 ** i) : e));
  return sum;
};
console.log(binaryToDecimal3(arr));
