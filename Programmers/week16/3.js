//전력망을 둘로 나누기
function solution(n, wires) {
  let minimum = Infinity;
  for (let i = 0; i < wires.length; i++) {
    let tree1 = new Set();
    let tree2 = new Set();

    for (let j = 0; j < wires.length; j++) {
      if (j === i) {
        if (tree1.size < 1 && tree2.size < 1) {
          tree1.add(wires[j][0]);
          tree2.add(wires[j][1]);
        } else if (tree1.has(wires[j][0])) {
          tree2.add(wires[j][1]);
        } else if (tree2.has(wires[j][0])) {
          tree1.add(wires[j][1]);
        } else if (tree1.has(wires[j][1])) {
          tree2.add(wires[j][0]);
        } else if (tree2.has(wires[j][1])) {
          tree1.add(wires[j][0]);
        }

        continue;
      }

      if (tree1.has(wires[j][0] || tree1.has(wires[j][1]))) {
        tree1.add(wires[j][0]);
        tree1.add(wires[j][1]);
      } else {
        tree2.add(wires[j][0]);
        tree2.add(wires[j][1]);
      }
    }

    let treeMin = Infinity;
    if (tree1.size > tree2.size) {
      treeMin = tree1.size - tree2.size;
    } else {
      treeMin = tree2.size - tree1.size;
    }

    if (minimum > treeMin) {
      minimum = treeMin;
    }
  }

  return minimum;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
