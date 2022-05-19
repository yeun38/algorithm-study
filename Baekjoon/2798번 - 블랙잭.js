const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const input1 = input[0].split(' ');

const arr = input[1].split(' '); // string에서 object로 변환
const sortArr = arr.map(item => Number(item)).sort((a, b) => a - b);
const allSum = sortArr.reduce((acc, cur) => acc + cur, 0); // 합구하고
const diff = allSum - Number(input1[1]);
const result = [];
// console.log(typeof Number(input1[0]));
// console.log(diff);
for (let i = 0; i < Number(input1[0]) - 1; i++) {
  for (let j = i + 1; j < input1[0]; j++) {
    if (diff <= sortArr[i] + sortArr[j]) {
      result.push(allSum - (sortArr[i] + sortArr[j]));
      break;
    }
  }
}
console.log(result);
