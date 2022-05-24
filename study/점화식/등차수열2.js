function recursive(s, d, number) {
  //멈출 조건
  if (number === 1) {
    return s;
  }
  // 반복할 코드
  return recursive(s, d, number - 1) + d;
}

console.log(recursive(1, 2, 7));
