function solution(maps) {
  let mapsArr = maps.map((row) => row.split(""));

  let rowLen = maps.length;
  let colLen = maps[0].length;
  let direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let answer = [];

  function bfs(row, col) {
    let queue = [[row, col]];
    let food = 0;
    while (queue.length > 0) {
      let [r, c] = queue.shift();
      if (mapsArr[r][c] === "X") continue;

      food += parseInt(mapsArr[r][c]);
      mapsArr[r][c] = "X";
      for (let [dr, dc] of direction) {
        let nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rowLen &&
          nc < colLen &&
          mapsArr[nr][nc] !== "X"
        ) {
          queue.push([nr, nc]);
        }
      }
    }

    return food;
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (mapsArr[i][j] !== "X") {
        answer.push(bfs(i, j));
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
console.log(solution(["XXX", "XXX", "XXX"])); // [-1]
