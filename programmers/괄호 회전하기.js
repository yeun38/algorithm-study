function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      const c = s[(i + j) % n];

      if (c === "[" || c === "(" || c === "{") {
        // ➋ 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
