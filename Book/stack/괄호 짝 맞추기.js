function solution(s) {
  const stack = [];
  s.map((item) => {
    if (item === "(") {
      stack.push("(");
    } else {
      // 여기서 길이 체크 이후 스택의 연산을 실행하면 불필요한 s요소 검사를 줄일 수 있음
      stack.pop();
    }
  });

  if (s.length === 0) {
    return true;
  } else {
    false;
  }
}
