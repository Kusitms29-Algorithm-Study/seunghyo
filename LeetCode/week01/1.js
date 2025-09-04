//Number of Islands
var numIslands = function (grid) {
  let islandTotal = 0;

  let m = grid.length; //row 수
  let n = grid[0].length; //col 수

  let visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false)
  );

  function checkIsIsland(row, col) {
    visited[row][col] = true;
    grid[row][col] = "0";

    let directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let [dr, dc] of directions) {
      let nr = row + dr;
      let nc = col + dc;
      if (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        !visited[nr][nc] &&
        grid[nr][nc] === "1"
      )
        checkIsIsland(nr, nc);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        checkIsIsland(i, j);
        islandTotal++;
      }
    }
  }

  return islandTotal;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
