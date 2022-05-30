const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
let num = parseInt(input[0]);

let arr = [];
let i = 2;

while (i <= num) {
  if (num % i === 0) {
    while (num % i === 0) {
      arr.push(i);
      num = num / i;
    }
  }
  i++;
  if (num === 1) {
    break;
  }
}

console.log(arr.join("\n"));
