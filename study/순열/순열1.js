//중복없이 순서에 상관있게 나열하는 경우의 수
const input = ["a", "b", "c"];
let count = 0;

function permutation(arr) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < input.length; k++) {
        if (k === i) continue;
        if (k === j) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log(count);
