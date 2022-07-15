const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

let width = Number(input[0]);
let height = input[1];

for (let i = 0; i < height; i++) {
  console.log("*".repeat(width));
}
