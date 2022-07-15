function solution(numbers) {
  var answer = -1;
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.includes(i) == 0) {
      sum += i;
    }
  }
  answer = sum;
  return answer;
}
