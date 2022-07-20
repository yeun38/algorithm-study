function solution(n) {
  let arr = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  return arr.reduce((acc, cur) => acc + cur, 0);
}
