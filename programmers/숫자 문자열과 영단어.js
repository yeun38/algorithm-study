function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // 특정 구분자로 잘라낼 경우 제거된 상태로 배열에 담긴다.
    answer = arr.join(i);
  }

  return Number(answer);
}
