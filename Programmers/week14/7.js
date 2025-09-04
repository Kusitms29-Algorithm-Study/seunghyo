//거리두기 확인하기
function solution(places) {
  let answer = [];
  function checkRoom(room) {
    let direction = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] === "P" && !bfsCheck(room, i, j, direction)) {
          return 0;
        }
      }
    }
    return 1;
  }

  function bfsCheck(room, row, col, direction) {
    let queue = [[row, col, 0]];
    let visited = Array.from({ length: 5 }, () => Array(5).fill(false));
    visited[row][col] = true;

    while (queue.length > 0) {
      let [r, c, dist] = queue.shift();

      if (dist > 0 && room[r][c] === "P") {
        return false;
      }

      if (dist < 2) {
        for (let [dr, dc] of direction) {
          let nr = r + dr;
          let nc = c + dc;

          if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5 && !visited[nr][nc]) {
            if (room[nr][nc] !== "X") {
              visited[nr][nc] = true;
              queue.push([nr, nc, dist + 1]);
            }
          }
        }
      }
    }
    return true;
  }

  for (let room = 0; room < places.length; room++) {
    answer.push(checkRoom(places[room]));
  }

  return answer;
}
console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
