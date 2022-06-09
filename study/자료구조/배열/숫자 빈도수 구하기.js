function answer(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  let num;
  for (let i = s; i <= e; i++) {
    num = i;

    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }
  return result;
}
