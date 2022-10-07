//? Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//? No floats or non-positive integers will be passed.
//? For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//? [10, 343445353, 3453445, 3453545353453] should return 3453455.

//In this program I take care of all cases.
const sumOfTwoLowest = (arr) => {
  let secondLowest = 0;
  let lowest = 0;
  let sum = 0;
  // filter out non integers and negative numbers.
  const validArr = arr.filter(
    (check) => typeof check === "number" && check >= 0
  );
  // console.log warning when length of numbers is less than 4 and return unfiltered array.
  if (validArr.length < 4) {
    console.log(
      "The array length is less than 4 and/or does not contain at least 4 numbers that are zero or greater."
    );
    return arr;
    // if value at i=0 is less than value at i=1, set lowest as value at i=0;
    // and secondLowest as value at i=1;
  } else if (validArr[0] < validArr[1]) {
    lowest = validArr[0];
    secondLowest = validArr[1];
    // if value at i=1 is greater than value at i=0, set lowest as value at i=1;
    // and secondLowest as value at i=0;
  } else if (validArr[0] > validArr[1]) {
    lowest = validArr[1];
    secondLowest = validArr[0];
    //if both values at i=0 and value at i=1 are equal, set lowest as the value at i=0, and
    // assign to secondLowest the biggest number in the array using Math.max()
  } else {
    lowest = validArr[0];
    secondLowest = Math.max(...validArr);
  }
  for (let i = 2; i < validArr.length; i++) {
    if (lowest > validArr[i]) {
      secondLowest = lowest;
      lowest = validArr[i];
    }
    if (lowest < validArr[i]) {
      if (secondLowest > validArr[i]) {
        secondLowest = validArr[i];
      }
    }
    sum = secondLowest + lowest;
  }

  return sum;
};

arr = [1, 1, 2, 1];
console.log(sumOfTwoLowest(arr));
