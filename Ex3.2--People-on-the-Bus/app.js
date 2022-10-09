//? Number of people in the bus
//? There is a bus moving in the city, and it takes and drop some people in each bus stop.
//? You are provided with a list (or array) of integer arrays (or tuples).
//? Each integer array has two items which represent number of people get into bus (The first item)
//? and number of people get off the bus (The second item) in a bus stop.
//? Your task is to return number of people who are still in the bus after the last bus station (after the last array).
//? Even though it is the last bus stop, the bus is not empty and some people are still in the bus,
//? and they are probably sleeping there :D
//? Take a look on the test cases.
//? Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0.
//?  So the return integer can't be negative.
//? The second value in the first integer array is 0, since the bus is empty in the first bus stop.
//? array =[[10,0],[3,5],[5,8]]

//function to flatten nested array into non nested array.
function flatArr(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

// function to check if array contains a string.
function isString(arr) {
  return arr.find((str) => typeof str === "string");
}

const peopleOntheBus = (arr) => {
  const flatArray = flatArr(arr);
  if (isString(flatArray)) {
    return "Numbers only!!";
  }
  //The second value in the first integer array is 0, since the bus is empty in the first bus stop.
  if (flatArray[1] > 0) {
    return "On the first stop there should be 0 people who got off, only people who got in.";
  }

  const leftInTheBus = arr
    .map((e) => {
      return e[0] - e[1];
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });
  if (leftInTheBus <= 0) {
    return "Total number of people who get-off the bus must be lower than those who get-in. ";
  }
  return leftInTheBus;
};

array = [
  [10, 0],
  [3, 1],
  [3, 1],
];
console.log(peopleOntheBus(array));
