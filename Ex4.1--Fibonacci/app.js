//? “Write a function to return an n element in Fibonacci sequence”
//? is one of the most common questions you can hear during the coding challenge interview part.
//?  In this blogpost I’m going to walk through the two of the most typical solutions for this problem and also cover
//?  a dreadful (for most of novice developers) topic of time complexity.
//? So what is a Fibonacci sequence? According to ​Wikipedia​:
//? “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence,
//? and characterized by the fact that every number after the first two is the sum of the two preceding ones.”
//? Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like this:
//? 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
//? or this:
//? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

const fib01 = [0, 1];
const fib11 = [1, 1];
function fibonacci(n, num) {
  if (num === 1) {
    for (let j = fib11.length; j <= n; j++) {
      fib11.push(fib11[j - 1] + fib11[j - 2]);
    }
    return fib11;
  } else if (num === 0) {
    for (let i = fib01.length; i <= n; i++) {
      fib01.push(fib01[i - 1] + fib01[i - 2]);
    }
    return fib01;
  } else return "Fibonacci can only start from 0 or 1, not something else.";
}

console.log(fibonacci(10, 1));
console.log(fibonacci(10, 0));
