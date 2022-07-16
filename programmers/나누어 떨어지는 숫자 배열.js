function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length !== 0) {
    answer.sort((a, b) => a - b);
  } else {
    answer.push(-1);
    //[-1]
  }
  return answer;
}

console.log(solution([1, 2, 3, 36], 1));
