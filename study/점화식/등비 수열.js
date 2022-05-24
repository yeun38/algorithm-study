let result = 1;

function forloop(s, t, number) {
  for (let i = 1; i <= number; i++) {
    if (i === 1) result *= s;
    else result *= t;
  }
  return result;
}
result = forloop(3, 2, 5);
console.log(result);
