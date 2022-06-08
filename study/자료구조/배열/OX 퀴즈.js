//일단 배열 길이만큼 돌아서 원소값을 뱉고 그 값이 일이면 0되면 초기화 되도록
function answer(mark) {
  let result = 0;
  let cnt = 0;

  for (let i = 0; i < mark.length; i++) {
    if (mark[i] === 0) {
      cnt = 0;
    } else {
      result += ++cnt;
    }
  }
  return result;
}

let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
