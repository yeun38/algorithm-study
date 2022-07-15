function solution(s) {
  var answer = "";
  let word = s.length;
  let index = "";
  if (word % 2 == 0) {
    index = parseInt(word / 2);
    // answer = s[index - 1] + s[index];
    answer = s.slice(index - 1, index + 1);
  } else {
    index = parseInt(word / 2);
    answer = s[index];
  }
  return answer;
}

console.log(solution("adadsf"));
