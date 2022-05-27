let fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));
let i = 1;
let result = [];

while (true) {
  if (i ** 2 >= input[0] && i ** 2 <= input[1]) {
    result.push(i ** 2);
  } else if (i ** 2 > input[1]) {
    break;
  }
  i++;
}

result.sort((a, b) => a - b);

if (result.length === 0) {
  console.log("-1");
} else {
  console.log(result.reduce((past, curr) => past + curr, 0));
  console.log(result[0]);
}
