function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function solution(book_time) {
  book_time.sort((a, b) => timeToMinutes(a[0]) - timeToMinutes(b[0]));
  console.log(book_time);

  const rooms = [];

  for (const [start, end] of book_time) {
    const startTime = timeToMinutes(start);
    const endTime = timeToMinutes(end) + 10;

    rooms.sort((a, b) => a - b);
    if (rooms.length && rooms[0] <= startTime) {
      rooms.shift();
    }

    rooms.push(endTime);
  }

  return rooms.length;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
