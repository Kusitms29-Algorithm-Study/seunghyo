function solution(board) {
  const N = board.length;
  const M = board[0].length;

  let visited = Array.from({ length: N }, () => Array(M).fill(-1));
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  let startX, startY;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        startX = i;
        startY = j;
      }
    }
  }

  let queue = [[startX, startY]];
  visited[startX][startY] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x;
      let ny = y;
      while (
        nx + dx[i] >= 0 &&
        ny + dy[i] >= 0 &&
        nx + dx[i] < N &&
        ny + dy[i] < M &&
        board[nx + dx[i]][ny + dy[i]] !== "D"
      ) {
        nx += dx[i];
        ny += dy[i];
      }
      if (visited[nx][ny] === -1) {
        visited[nx][ny] = visited[x][y] + 1;
        if (board[nx][ny] === "G") {
          return visited[nx][ny];
        }
        queue.push([nx, ny]);
      }
    }
  }
  return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
