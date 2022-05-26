function answer(a, d, n) {
  let index;

  //등차수열
  let num;
  for (let i = 1; ; i++) {
    //무한반복을 공백으로 표현
    num = a + d * (i - 1);

    if (num > n) {
      index = -1;
      break;
    }

    if (num == n) {
      index = i;
      break;
    }
    console.log(num);
  }
  return index;
}

let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
