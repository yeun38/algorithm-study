function solution(price, money, count) {
  var answer = -1;
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  answer = money > sum ? 0 : sum - money;

  return answer;
}
