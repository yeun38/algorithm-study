function solution(n) {
  var answer = "";
  answer =
    n % 2 == 0
      ? "수박".repeat(parseInt(n / 2))
      : "수박".repeat(parseInt(n / 2)) + "수";
  return answer;
}
