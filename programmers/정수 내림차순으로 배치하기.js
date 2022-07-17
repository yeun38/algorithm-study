// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }

function solution(arr) {
  arr = arr
    .toString()
    .split("")
    .map((o) => (o = parseInt(o)));
  arr = arr.sort((a, b) => b - a);
  arr = +arr.join("");
  return arr;
}
