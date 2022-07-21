function solution(answers) {
  var answer = [];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  for (i = 0; i < answer.length; i++) {
    if (arr1[i % 5] == answer[i]) count[0]++;
    if (arr2[i % 8] == answer[i]) count[1]++;
    if (arr3[i % 10] == answer[i]) count[2]++;
  }

  let result = [];
  const max = Math.max(...count);
  let idx = 0;
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) {
      result[idx] = i + 1;
      idx++;
    }
  }
  return result;
}
