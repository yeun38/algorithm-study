class Queue {
  items = [];
  front = 0;
  rear = 0;

  // 큐에 값이 들어오면 rear의 값이 커짐
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  // front는 첫번째 데이터의 위치를 가르킴
  pop() {
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  // 배열을 만들어 줌 == deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  console.log(queue);

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // 동그랗게 돌아가는 느낌으로 뒤로 다시 넣어준다
    }
    queue.pop();
  }

  return queue.pop();
}
