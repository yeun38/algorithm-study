function solution(s) {
  let answer = true;
  for (let i = 0; i < s.length; i++) {
    let word = +s[i];
    console.log(word);
    console.log(typeof word);
    if (typeof word !== "number") {
      answer = false;
      break;
    } else {
      answer = true;
    }
  }
  return answer;
}

console.log(solution("a233"));

// function solution(s) {
//     var answer = true;
//     let number = Number(s);
//     if (typeof number === Number) {
//     } else {
//       answer = false;
//     }
//     return answer;
//   }
