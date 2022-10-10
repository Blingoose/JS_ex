//? Simple, given a string of words, return the length of the shortest word(s).
//? String will never be empty and you do not need to account for different data types.

const sentence = "He decided to fake his disappearance to avoid jail";

function shortestWord(str) {
  const arr = [];
  const word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    arr.push(word[i].length);
  }
  return Math.min(...arr);
}

console.log(shortestWord(sentence));
