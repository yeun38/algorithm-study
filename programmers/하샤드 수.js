function solution(x) {
  var answer = true;
  let sum = 0;
  let newX = String(x);
  for (let i = 0; i < newX.length; i++) {
    sum += Number(newX[i]);
  }
  console.log(sum);
  answer = x % sum == 0 ? true : false;
  return answer;
}

console.log(solution(123));
