function solution(priorities, location) {
  let done = 0;
  let queue = [...priorities];
  while (queue.length > 0) {
    let cur = queue.shift();

    let able = true;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] > cur) {
        able = false;
        break;
      }
    }
    //console.log(cur, able, location, queue);
    if (location === 0) {
      if (able) {
        return done + 1;
      } else {
        queue.push(cur);
        location = queue.length - 1;
      }
      continue;
    }

    if (able) {
      done++;
    } else {
      queue.push(cur);
    }
    location--;
  }
}

console.log(solution([2, 1, 3, 2], 2)); //	1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
