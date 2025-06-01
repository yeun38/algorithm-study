function solution(s) {
  const result = [];

  for (const c of s) {
    if (result.length > 0 && result[result.length - 1] === c) {
      result.pop();
    } else {
      result.push(c);
    }
  }
  return result.length === 0 ? 0 : 1;
}
