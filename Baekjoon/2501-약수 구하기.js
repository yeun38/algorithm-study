const fs = require("fs").readFileSync("input.txt").toString().trim().split(" ");

const number = Number(fs[0]);
const index = Number(fs[1]);
let arr = [];

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    arr.push(i);
  }
}

let answer = arr.length >= index ? arr[index - 1] : 0;
console.log(answer);
