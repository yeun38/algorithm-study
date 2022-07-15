function solution(absolutes, signs) {
  var answer = 123456789;
  let sum = 0;
  let new_array = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      new_array.push(absolutes[i] * 1);
    } else {
      new_array.push(absolutes[i] * -1);
    }
  }
  answer = sum;
  return answer;
}

console.log(solution([1, 2, 3, 4], [true, false, false, true]));
