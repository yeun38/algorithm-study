const fs = require('fs');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(item => Number(item));

const number = input[0];

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(number));
