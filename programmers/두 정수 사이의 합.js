function solution(a, b) {
  var answer = 0;
  let min;
  let max;
  //대소관계 비교하기
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  for (let i = min; i < max + 1; i++) {
    answer = answer + i;
    //sum += i
  }
  return answer;
}

console.log(solution(5, 2));
