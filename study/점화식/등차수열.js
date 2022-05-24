function forloop(s, d, number) {
  let acc = 0;
  for (let i = 1; i <= number; i++) {
    if (i === 1) {
      acc += s;
    } else {
      acc += d;
    }
  }
  return acc;
}

console.log(forloop(1, 3, 5));
