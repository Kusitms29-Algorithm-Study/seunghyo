function solution(m, n, startX, startY, balls) {
  const answer = [];

  for (const [ballX, ballY] of balls) {
    const distances = [];

    // x = 0
    if (!(startY === ballY && startX > ballX)) {
      const dx = -ballX - startX;
      const dy = ballY - startY;
      distances.push(dx ** 2 + dy ** 2);
    }

    // x = m
    if (!(startY === ballY && startX < ballX)) {
      const dx = 2 * m - ballX - startX;
      const dy = ballY - startY;
      distances.push(dx ** 2 + dy ** 2);
    }

    // y = 0
    if (!(startX === ballX && startY > ballY)) {
      const dx = ballX - startX;
      const dy = -ballY - startY;
      distances.push(dx ** 2 + dy ** 2);
    }

    // y = n
    if (!(startX === ballX && startY < ballY)) {
      const dx = ballX - startX;
      const dy = 2 * n - ballY - startY;
      distances.push(dx ** 2 + dy ** 2);
    }

    answer.push(Math.min(...distances));
  }

  return answer;
}

console.log(
  solution(10, 10, 3, 7, [
    [7, 7],
    [2, 7],
    [7, 3],
  ])
);
