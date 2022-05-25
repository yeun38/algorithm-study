const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const K = Number(input[0]);
const arr = [];

for (let i = 1; i <= K; i++) {
  if (+input[i] !== 0) {
    arr.push(input[i]);
  } else {
    arr.pop();
  }
}
// console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += parseInt(arr[i], 10);
}
console.log(sum);
