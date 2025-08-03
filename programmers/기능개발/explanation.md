# 🔗 [기능 개발](https://school.programmers.co.kr/learn/courses/30/lessons/42586)

### 나의 접근 방식

- 문제에서 "뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다"라는 내용이 있기때문에 스택이라고 생각하고 접근
  👉🏻 뒤의 기능은 앞의 기능이 배포될 때 함께 배포되어야하는 점에서 큐를 떠올릴 수 있어야함
- 반복문으로 speed값을 더한 뒤 100이 되었다면 shift(),push()를 통해 체크하려고 생각

##### 문제

- progress가 100에 도달했는지 연속으로 몇개의 progress를 빼야하는지 반복문을 돌면서 체크해야 할 조건이 많음

```javascript
function solution(progresses, speeds) {
  const answer = [];
  let cnt = 0;

  while (progresses.length > 0) {
    for (const [index, speed] of speeds) {
      if (progresses[index] >= 100) {
        progresses.shift(); // 이렇게 되면 순차적으로 빠지지 못함
        cnt++;
      }
      progresses[index] += speed;
    }
    answer.push(cnt);
  }

  return answer;
}
```

### 정답 풀이

- 1번풀이, 2번풀이 모두 2개의 반복문을 돌려 조건 처리
- 변경되는 기준값은 특정 변수에 넣어서 바꾸거나 비교하는 배열에 shift()로 첫번째값을 바꾸어준다.
