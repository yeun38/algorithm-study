function solution(x) {
  let sum = 0;
  let newX = String(x);
  for (let i = 0; i < newX.length; i++) {
    sum += Number(newX[i]);
  }
  return sum;
}
// foreach가 어울리는 문제 같다
