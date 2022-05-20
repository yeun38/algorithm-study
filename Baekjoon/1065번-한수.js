const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split();
const N = Number(input);

let count = 0;

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    count++;
  } else {
    const nArr = String(i);
    const A = Number(nArr[0]) - Number(nArr[1]);
    const B = Number(nArr[1]) - Number(nArr[2]);
    if (A === B) {
      count++;
    }
  }
}

console.log(count);
