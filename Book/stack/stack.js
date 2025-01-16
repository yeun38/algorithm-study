const stack = [];
const maxSize = 10;

function isFull(stack) {
  return stack.length === maxSize;
}

function isEmpty(stack) {
  return stack.length === 0;
}

function push(stack, item) {
  if (isFull(stack)) {
    console.log("스택이 가득 찼습니다.");
  } else {
    stack.push(item);
  }
}

function pop(stack) {
  if (isEmpty) {
    console.log("스택이 비어 있습니다.");
    return null;
  } else {
    return stack.pop();
  }
}

/**
 * 하지만 자바스크립트는 배열의 크기가 동적으로 관리되므로 maxSize, full, empty 함수는 필요하지 않음
 */
