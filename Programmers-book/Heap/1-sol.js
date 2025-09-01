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

  push(value) {
    this.heap.push(value);
    this.bubbleup();
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    while (
      (leftChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[leftChildIndex]) ||
      (rightChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[rightChildIndex])
    ) {
      const smallerChildIndex =
        rightChildIndex >= this.heap.length ||
        this.heap[leftChildIndex] < this.heap[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      this.swap(currentIndex, smallerChildIndex);

      currentIndex = smallerChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);
    }

    return root;
  }

  bubbleup() {
    let child = this.heap.length - 1;
    let parent = this.getParentIndex(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.getParentIndex(child);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (let i = 0; i < scoville.length; i++) {
    minHeap.push(scoville[i]);
  }

  let count = 0;

  while (minHeap.heap[0] < K) {
    if (minHeap.heap.length === 1) return -1;

    const first = minHeap.pop();
    const second = minHeap.pop();

    const mixed = first + second * 2;
    minHeap.push(mixed);

    count++;
  }

  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
