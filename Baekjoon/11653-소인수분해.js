const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let num = parseInt(input[0]);

let i = 2;
let arr = [];
while (true) {
  if (num % i === 0) {
    num = num / i;
    arr.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(arr.join("\n"));
