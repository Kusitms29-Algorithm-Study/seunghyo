//디펜스 게임, 우선순위 큐
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
function solution(n, k, enemy) {
  let heap = [];
  let round = 0;

  for (let i = 0; i < enemy.length; i++) {
    n -= enemy[i];
    heap.push(enemy[i]);
    heap.sort((a, b) => b - a);
    if (n < 0) {
      // 병사가 부족하다면
      if (k > 0) {
        // 무적권 사용 가능
        // 방금까지 중 가장 많은 적 등장 라운드에 무적권 적용
        n += heap[0]; // 해당 라운드 병사 사용을 취소
        heap.shift(); // 무적권 사용 라운드는 제거
        k--; // 무적권 사용 횟수 감소
      } else {
        // 더 이상 진행 불가
        break;
      }
    }
    round++;
  }
  return round;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
