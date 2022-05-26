let result;

function answer(a, b, c) {
  num = [a, b, c];
  num.sort((x, y) => x - y);
  // 등차값 찾기
  let d = (num[2] - num[0]) / 3;

  // 빈 index찾기
  result = num[0] + d === num[1] ? num[1] + d : num[1] - d;
  return result;
}

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [11, 2, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
