const fs = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const arrA = fs[1].split(' ').sort((a, b) => a - b);
const arrB = fs[2].split(' ').sort((a, b) => b - a);
let sum = 0;

for (let i = 0; i < Number(fs[0]); i++) {
  sum += arrA[i] * arrB[i];
}

console.log(sum);
