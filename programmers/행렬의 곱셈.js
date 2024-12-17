function solution(arr1, arr2) {
  var answer = [[]];

  const r1 = arr1.length;
  const c1 = arr1[0].length;

  const r2 = arr2.length;
  const c2 = arr2[0].length;

  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return ret;
}

// 첫번째 행렬의 행과 두번째 행렬의 열이 행렬 결과 값
// 곱한 값을 더해서 하나의 좌표에 값이 되는 공식 기억하기!
// k의 자리위치
