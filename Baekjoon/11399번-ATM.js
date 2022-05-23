const fs = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = +fs[0];
const arr = fs[1].split(' ').sort((a, b) => a - b);

let sum = 0;
let Pi = 0;
for (let i = 0; i < N; i++) {
  sum += Pi + Number(arr[i]);
  Pi += Number(arr[i]);
}

console.log(sum);
