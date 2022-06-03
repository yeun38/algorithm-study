// 모든 숫자를 더해서 100을 만들려면 반복문이 여러개 필요하니까
//반복문을 줄이기 위해서는 반대의 경우를 생각해서 전체합에서 100을 빼서 두수가 그 차이값일경우 아니면 더 작을경우

//차이값 구하기
function answer(dwarf) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100;
  facker = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum === dwarf[i] + dwarf[j]) {
        facker[0] = i;
        facker[1] = j;
        break;
      }
    }
    if (facker.length != 0) break;
  }

  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (facker[0] != i && facker[1] != i) {
      result[count++] = dwarf[i];
    }
  }
  return result;
}

/* mian code */
let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`); //출력을 할때 사용하는 함수이며 아래 코드와 개행의여부에 차이가 있다.
  console.log(answer(input[i]));
}
