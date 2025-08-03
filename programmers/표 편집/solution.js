function solution(n, k, cmd) {
  //모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여
  // 각각을 수행하는 일은 비효율적임 -> 처음 표와 마지막 표만 비교함

  // 삭제된 행의 인덱스를 저장한느 배열
  const deleted = [];

  // 위 아래 인덱스값을 정해두는 배열
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 2)].map((_, i) => i + 1);

  k += 1;

  // 주어진 cmd를 돌면서 배열 요소를 처리
  for (const item of cmd) {
    if (item[0] === "C") {
      deleted.push(k);
      if (k != n + 1) {
        up[k - 1] = up[k];
        k += 1;
      } else {
        k -= 1;
      }
    }
    if (item[0] === "D") {
      k = k - item[1];
      deleted.push(k);
      up[k - 1] = up[k];
      down[k + 1] = down[k];
    }
    if (item[0] === "U") {
      k = k + item[1];
      deleted.push(k);
      up[k - 1] = up[k];
      down[k + 1] = down[k];
    }
    if (item[0] === "Z") {
      let zIdx = deleted.pop();
      up[zIdx - 1] = zIdx;
      down[zIdx + 1] = zIdx;
    }
  }

  console.log(up);

  //n으로 표를 나타내는 배열을 만들어야해
  // k는 처음 위치를 말하고
  // cmd는 진행방향들

  return;
}

solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"]);
