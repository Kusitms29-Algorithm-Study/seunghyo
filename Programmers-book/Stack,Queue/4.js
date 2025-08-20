// //프로세스
// class PriorityQueue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue() {
//     for (let i = 0; i < this.queue.length; i++) {
//       if (this.queue[i] < element) {
//         this.queue.splice(i, 0, element);
//         return;
//       }
//     }
//     this.queue.push(element);
//   }

//   dequeue() {
//     return this.queue.shift();
//   }

//   front() {
//     return this.queue[0];
//   }

//   size() {
//     return this.queue.length;
//   }

//   clear() {
//     this.queue = [];
//   }
// }
// function solution(priorities, location) {
//   let pq = new PriorityQueue();
//   for (let i = 0; i < priorities.length; i++) {
//     pq.enqueue(priorities[i]);
//   }
// }

// console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));

// Queue 구현
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }
  enqueue(item) {
    this.items[this.rearIndex] = item;
    this.rearIndex++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  isEmpty() {
    return this.frontIndex === this.rearIndex;
  }
  size() {
    return this.rearIndex - this.frontIndex;
  }
  toArray() {
    return Object.values(this.items);
  }
}

// solution 함수
function solution(priorities, location) {
  const queue = new Queue();

  // 각 프로세스 정보: { priority, index }
  priorities.forEach((priority, idx) => {
    queue.enqueue({ priority, index: idx });
  });

  let count = 0;

  while (!queue.isEmpty()) {
    let current = queue.dequeue();
    let maxPriority = Math.max(...queue.toArray().map((p) => p.priority));

    if (current.priority < maxPriority) {
      // 뒤로 보내기
      queue.enqueue(current);
    } else {
      // 실행
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }
}
