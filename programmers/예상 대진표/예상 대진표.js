function solution(n, a, b) {
  // 사실 n은 계산에 필요없음
  let count = 0;
  while (a !== b) {
    a = Math.ceil(a / 2); //숫자보다 크거나 같은 가장 작은 정수
    b = Math.ceil(b / 2);
    count += 1;
  }

  return count;
}
