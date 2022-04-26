const input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) {
  //(배열,시작위치,몇개뽑을지)
  //1. 재귀함수를 멈춰야할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }
  //2. 재귀를 돌면서 변경되어야할 부분 / 메인로직
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
  }
}

permutation(input, 0, 2); //2번까지 총 3개
console.log(count);
