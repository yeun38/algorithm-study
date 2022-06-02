/* user code */
function answer(nums) {
  let result = [];
  let count = 0;

  //최소값 찾기
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  //최소값의 인덱스위치 찾기 > min값이랑 같을 경우 인덱스반환
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === min) result[count++] = i;
  }
  return result;
}

/* mian code */
let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [11, 15, 12, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`); //출력을 할때 사용하는 함수이며 아래 코드와 개행의여부에 차이가 있다.
  console.log(answer(input[i]));
}
