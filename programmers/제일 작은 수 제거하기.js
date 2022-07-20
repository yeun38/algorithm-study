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
