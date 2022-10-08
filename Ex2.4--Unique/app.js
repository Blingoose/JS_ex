//? There is an array with some numbers. All numbers are equal except for one. Try to find it! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//? findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//? It’s guaranteed that array contains at least 3 numbers.

// Version 1
const arr = [1, 1, 2];
function find(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
      return arr[i];
    } else if (arr[0] !== arr[arr.length - 1]) {
      return arr[arr.length - 1];
    }
  }
}
console.log(find(arr));

// Version 2
const arr2 = [1, 2, 2, 2];
function find1(arr) {
  const mini = Math.min(...arr);
  const maxi = Math.max(...arr);
  const minArr = arr.filter((max) => max === maxi);
  const maxArr = arr.filter((min) => min === mini);
  if (minArr.length < maxArr.length) {
    return minArr[0];
  }
  return maxArr[0];
}
console.log(find1(arr2));
