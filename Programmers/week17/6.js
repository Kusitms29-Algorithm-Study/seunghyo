function solution(n, roads, sources, destination) {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const dist = Array(n + 1).fill(-1);
  const queue = [destination];
  dist[destination] = 0;

  while (queue.length > 0) {
    let curr = queue.shift();
    for (let next of graph[curr]) {
      if (dist[next] === -1) {
        dist[next] = dist[curr] + 1;
        queue.push(next);
      }
    }
  }

  return sources.map((src) => dist[src]);
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
);
