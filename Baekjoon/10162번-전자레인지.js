const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(item => Number(item));

let T = input[0];
const A = 300;
const B = 60;
const C = 10;
let cnt = [];

cnt.push(Math.floor(T / A));
T %= A;

cnt.push(Math.floor(T / B));
T %= B;

cnt.push(Math.floor(T / C));
T %= C;

cnt = T !== 0 ? -1 : cnt.join(' ');
console.log(cnt);
