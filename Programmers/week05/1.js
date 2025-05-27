//석유 시추
function solution(land) {
  let n = land.length; //세로 길이
  let m = land[0].length; //가로 길이
  let max = 0;
  for (let i = 0; i < m; i++) {
    let count = 0;
    const visited = new Map();
    for (let j = 0; j < n; j++) {
      for (let h = 0; h < m; h++) {
        console.log(visited);
        console.log(i, j, h);
        //시추관이 설치된 위치에 있는 세로줄이라면 -> 채워진(1) 상태이기만 해도 count가 올라감
        if (land[j][h] === 1 && h === i) {
          count++;
          let key = `${h}`;
          if (!visited.has(key)) visited.set(key, []);
          visited.get(key).push(j);
        }
        //시추관이 설치된 위치에 있는 세로줄이 아니라면
        //현재 위치가 채워진 상태이면서, 왼쪽 줄이 visited 상태이거나(a조건) 위나 밑 부분이 왼쪽과 연결된 상태(b조건)이어야 한다.
        else if (land[j][h] === 1) {
          //a조건
          if (
            (visited.has(h - 1) && visited.get(h - 1).includes(j)) ||
            (visited.has(h - 1) && visited.get(h).includes(j - 1)) ||
            (visited.has(h - 1) &&
              visited.get(h - 1).includes(j + 1) &&
              land[j][h + 1] === 1)
          ) {
            count++;
            let key = `${h}`;
            if (!visited.has(key)) visited.set(key, []);
            visited.get(key).push(j);
          }
        }
      }
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
