// p = 31 m = 1,000,000,007

function polynomialHash(str) {
  const p = 31;
  const m = 1_000_000_007;

  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution(stringList, queryList) {
  const hashList = stringList.map((str) => polynomialHash(str));
  // 숫자로 바뀐 값들이 list에 담겨 있을거고

  const result = [];
  for (const qeury of queryList) {
    const queryHash = polynomialHash(qeury);

    if (hashList.include(queryHash)) {
      // 그 값이 list에 있는지 확인 include는 o(N)의 값을 가지고
      // O(1)이 성능이 훨씬 좋음
      // 그리고 이건 배열에 잇냐없냐를 나두는 hash테이블이 아닌
      // 숫자로 변환한 값만 배열로 가지고 있으니까 유무를 검색하는게 더 효율적인거같음
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
