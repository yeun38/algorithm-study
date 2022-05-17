const fs = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const input = fs[0].split(' ');
const num = +input[0];
let money = +input[1]; // string으로 받아옴. 계산은 가능

let cnt = 0;

for (let i = num; i > 0; i--) {
  cnt += Math.floor(money / Number(fs[i]));
  money %= Number(fs[i]);
}

console.log(cnt);
