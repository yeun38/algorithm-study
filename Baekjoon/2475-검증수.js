const fs = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const input = fs[0].toString().trim().split(" ");

let sum = 0;
for (let i = 0; i < 5; i++) {
  const squared = Number(input[i]) ** 2;
  sum += squared;
}
console.log(sum % 10);
