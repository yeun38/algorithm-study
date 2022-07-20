function solution(n) {
  let result = [];
  while (1) {
    result.push(n % 10);
    n = Math.floor(n / 10);
    if (n <= 0) return result;
  }
}
