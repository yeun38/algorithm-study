function solution(num) {
  let answer = 0;
  let cnt = 0;

  while (num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    cnt += 1;
  }
  if (cnt >= 500) {
    answer = -1;
  } else {
    answer = cnt;
  }
  return answer;
}
