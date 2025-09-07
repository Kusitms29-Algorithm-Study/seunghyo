//Shortest Path in Binary Matrix
function shortestPathBinaryMatrix(grid) {
  let n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  if (n === 1) return 1;

  let queue = [[0, 0, 1]];
  grid[0][0] = 1;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, -1],
    [1, 1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  while (queue.length > 0) {
    let [row, col, dist] = queue.shift();

    if (row === n - 1 && col === n - 1) {
      return dist;
    }

    for (let [dr, dc] of directions) {
      nr = dr + row;
      nc = dc + col;

      if (nr >= 0 && nc >= 0 && nr < n && nc < n && grid[nr][nc] === 0) {
        queue.push([nr, nc, dist + 1]);
        grid[nr][nc] = 1;
      }
    }
  }

  return -1;
}

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
