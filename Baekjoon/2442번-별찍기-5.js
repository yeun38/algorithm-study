const fs = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const number = Number(fs[0]);

for (let i = 1; i <= number; i++) {
  let output = '';
  output += ' '.repeat(number - i) + '*'.repeat(i * 2 - 1);
  console.log(output);
}
