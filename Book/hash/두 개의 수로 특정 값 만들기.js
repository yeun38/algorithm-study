// 더해서 k가 되는거니까 k보다 큰 숫자는 해시테이블에 넣을 필요도 없음
// k+1만큼의 테이블을 만드는 이유는 k만큼만들면(0~k-1)길이만큼 만들어지니까 0+6일수도 있잖아

function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);

  for (const num of arr) {
    const el = target - num;

    if (el !== num && hashtable[el] === 1) {
      return true;
    }
    return false;
  }
}
