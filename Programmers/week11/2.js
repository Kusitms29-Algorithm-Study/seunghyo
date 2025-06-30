function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(r, c) {
    let queue = [[r, c]];
    visited[r][c] = true;
    let totalFood = Number(maps[r][c]);
    let front = 0;

    while (front < queue.length) {
      const [x, y] = queue[front++];
      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          totalFood += Number(maps[nx][ny]);
          queue.push([nx, ny]);
        }
      }
    }
    return totalFood;
  }

  const result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        result.push(bfs(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
