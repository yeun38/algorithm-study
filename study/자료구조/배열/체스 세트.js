// 반복문을 이용하여 인덱스값으로 각 원소를 비교하여 출력값 반환
/* user code*/
const list = [1, 1, 2, 2, 2, 8];

function chess(arr) {
  const result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    result[count++] = list[i] - arr[i];
  }
  return result;
}

/* mian code */
let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`); //출력을 할때 사용하는 함수이며 아래 코드와 개행의여부에 차이가 있다.
  console.log(chess(input[i]));
}
