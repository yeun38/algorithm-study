// function solution(arr) {
//   var answer = [];
//   if (arr.length == 1) {
//     answer = [-1];
//   } else {
//     arr.splice(arr.indexOf(Math.min(arr)), 1);
//     answer = arr;
//   }
//   return answer;
// }

console.log(solution([4, 5, 2, 1, 7]));
function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    var minNum = Math.min(...arr); //배열복사하기
    var idx = arr.indexOf(minNum);
    arr.splice(idx, 1);
    answer = arr;
  }

  return answer;
}

// function solution(arr) {
//   if (arr.length === 1) return [-1];

//   let i = 0;
//   for (let j = 0; j < arr.length; j += 1) {
//     if (arr[i] > arr[j]) i = j;
//   }
//   arr.splice(i, 1);
//   return arr;
// }
