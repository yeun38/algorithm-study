// function solution(num) {
//   var answer = "";
//   if (num % 2 == 0) {
//     answer = "Even";
//   } else {
//     answer = "Odd";
//   }
//   return answer;
// }

function solution(num) {
  var answer = "";
  answer = num % 2 == 0 ? "Even" : "Odd";
  return answer;
}

console.log(solution(3));
