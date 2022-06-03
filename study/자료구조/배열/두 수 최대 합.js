// 이중포문을 이용하여 max값을 찾는데 그 때 i,j값을 저장해놔야겠는데?

/* user code*/
function answer(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] > max) {
        max = arr[i] + arr[j];
        result = [arr[i], arr[j]].sort((a, b) => b - a);
      }
    }
  }
  return result;
}

/* mian code */
let input = [
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`); //출력을 할때 사용하는 함수이며 아래 코드와 개행의여부에 차이가 있다.
  console.log(answer(input[i]));
}
