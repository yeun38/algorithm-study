//중복없이 순서에 상관없이 나열하는 경우의 수
let input = [1, 2, 3, 4];
let count = 0;

function combinatioin(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(input[i], input[j]);
    }
  }
}

combinatioin(input);
console.log(count);
