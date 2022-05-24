let result;
function recursive(s, d, number) {
  if (number === 1) return s;

  return recursive(s, d, number - 1) * d;
}
result = recursive(3, 2, 5);
console.log(result);
