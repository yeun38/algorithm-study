//JavaScript에서 함수의 파라미터로 전달받은 변수는 let처럼 재할당이 가능합니다.
// 내가 생각한 방법은 0으로 끝날 때랑 1로 끝날 때의 처리를 다르게 해줘야하기때문에 이런 경우 통일할 수 있는 방법이 있으면 경우를 나눠서 계산하지 않아도 되겠다.
function solution(number) {
  const stack = [];
  while (number > 0) {
    const remainder = number % 2;
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  let binary = stack.reverse().join("");

  return binary;
}

console.log(solution(10));
