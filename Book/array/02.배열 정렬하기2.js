function solution(arr) {
  const set = new Set(arr);
  const result = [...set].sort((a, b) => b - a);
  return result;
}

console.log(solution([4, 2, 2, 1, 3, 4]));
