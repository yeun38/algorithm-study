/* user code */
function answer(height) {
  let str = "\n";

  // 입력값만큼 공간 만들어주기
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - 1 - i; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

let input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
