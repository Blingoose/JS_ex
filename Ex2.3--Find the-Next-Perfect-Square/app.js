//? You might know some pretty large perfect squares. But what about the NEXT one?
//? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//? Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//? If the parameter is itself not a perfect square then -1 should be returned.
//? You may assume the parameter is positive.
//? Examples:
//? findNextSquare(121) --> returns 144
//? findNextSquare(625) --> returns 676
//? findNextSquare(114) --> returns -1 since 114 is not a perfect square.

const log = (l) => console.log(l);

function nextPerfectSquare(num) {
  let isNotPerfect = true;
  if (num % Math.sqrt(num) === 0) {
    let count = num;
    while (isNotPerfect) {
      count++;
      if (count % Math.sqrt(count) === 0) {
        isNotPerfect = false;
        return count;
      }
    }
  }
  return -1;
}

log(nextPerfectSquare(64));
