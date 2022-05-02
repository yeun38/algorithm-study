function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join(""); // 문자열 합치기

  return answer[0] === "0" ? "0" : answer;
}
