function solution(n) {
  let change = [];
  let result = 0;
  while (n > 0) {
    change.push(String(n % 3));
    n = parseInt(n / 3);
  }
  change = change.reverse().join(""); //string

  for (let i = 0; i < change.length; i++) {
    result += change[i] * 3 ** i;
    //result += change[i]*Math.pow(3,i)
  }
  return result;
}

console.log(solution(45));

// function solution(n) {
//     const answer = [];
//     while(n !== 0) {
//         answer.unshift(n % 3); reverse 대체 가능
//         n = Math.floor(n/3);
//     }
//     return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);
// }
