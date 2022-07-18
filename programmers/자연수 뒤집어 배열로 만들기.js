// function solution(arr) {
//   var answer = [];
//   let str = String(arr); // n = n + "" 스트링으로 변환
//   for (let i = str.length - 1; i >= 0; i--) {
//     answer.push(Number(str[i]));
//   }
//   return answer;
// }
//return n.toString().split('').reverse().map(o => o = parseInt(o));
// console.log(solution(12345));

function solution(arr) {
  var answer = [];
  let str = String(arr);
  for (let i = 0; i < str.length; i++) {
    answer.push(Number(str[i]));
  }
  answer = answer.sort((a, b) => b - a);
  console.log(typeof answer[1]);
  return answer;
}
console.log(solution(12345));

let result = [];
while (1) {
  result.push(n % 10);
  n = Math.floor(n / 10);
  if (n <= 0) return result;
}

// let sum = 0;
// while(1) {
// sum = (sum * 10) + n % 10
// n = Math.floor(n / 10)
// if(n <= 0) return sum
// }
