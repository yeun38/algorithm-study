class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      // this.root가 null이면
      this.root = new Node(key);
    } else {
      let curr = this.root;
      console.log(curr);
      while (true) {
        // 현재 노드의 값보다 작으면, 왼쪽 서브 트리에서 검색
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left; // 현재값을 왼쪽으로 이동
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          // 크거나 같으면 오른쪽 서브 트리
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;

    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  for (const key of list) {
    bst.insert(key);
  }

  const result = [];

  for (const serachVal of searchList) {
    if (bst.search(serachVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
