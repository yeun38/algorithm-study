// 객체와 객체를 비교
// 객체를 비교할 때도 길이로 먼저 비교해서 계산 낭비를 줄일 수 있고 이후 값이 일치하는지 확인하며 계산을 할 수 있음

function isShallowEqual(obj1, obj2) {
  const objkeys1 = Object.keys(obj1);
  const objkeys2 = Object.keys(obj2);
  if (objkeys1.length !== objkeys2.length) {
    return false;
  }

  for (const key of objkeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};

  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  // 10일이 가능한 반복문
  for (let i = 0; i < discount.length - 9; i++) {
    // 새로운 날짜마다 만들어진 객체 초기화
    let discountObj = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discountObj[discount[j]] = (discountObj[discountObj] || 0) + 1;
      }
    }

    if (isShallowEqual(wantObj, discountObj)) {
      answer += 1;
    }
  }

  return answer;
}

console.log(
  "solution()",
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
