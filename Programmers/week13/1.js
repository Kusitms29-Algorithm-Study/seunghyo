/* 1) Heap 구현 */
class Heap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[0];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

function solution(n, k, enemy) {
  // 2) Heap 객체를 생성한다.
  let heap = new Heap();
  let answer = 0;

  // 3) 공격 횟수 만큼 반복문 생성
  for (let i = 0; i < enemy.length; i++) {
    // 4) Heap 안에 무적권(k) 갯수 만큼 담는다.
    if (heap.size() < k) {
      heap.push(enemy[i]);
      answer++;
    } else {
      // 5) Heap의 최솟 값을 찾는다.
      let min = heap.getMin();

      // 6) Heap의 최솟 값이 공격하는 값보다 작을 때
      if (enemy[i] > min) {
        // 7) 보유한 병사(n)수에 최솟 값을 뺀다.
        n -= min;

        // 8) Heap 최솟 값을 공격 값과 교체
        heap.pop(min);
        heap.push(enemy[i]);
      } else {
        // 9) Heap의 최솟 값보다 크면 해당 공격 값을 보유한 병사(n)수에서 뺀다.
        n -= enemy[i];
      }
      // 10) 보유한 병사(n)수가 0보다 클때만 라운드(answer) 증가
      n >= 0 && answer++;
    }
  }
  return answer;
}
