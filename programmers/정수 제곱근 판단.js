function solution(n) {
  var answer = 0;
  let sqrt = parseInt(Math.sqrt(n)); // Math.sqrt(n)
  if (sqrt * sqrt == n) {
    // (sqrt % 1 !== 0) 정수인지 판단할 수 있음
    answer = -1;
  } else {
    answer = Math.pow(sqrt + 1, 2);
  }
  return answer;
}

// 참고하기 좋은 코드
// function nextSqaure(n){
//   var result = 0;
//   var x = 0;
//   while (x*x < n){
//     x++;
//   }
//   if (x*x == n){
//     x++;
//     result = x*x;
//   }else{
//     result = 'no';
//   }

//   return result;
// }
