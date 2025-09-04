//[1차] 캐시
function solution(cacheSize, cities) {
  let memory = Array(cacheSize).fill("");
  let hit = 0;

  for (let i = 0; i < cities.length; i++) {
    let cacheIn = false;
    let cacheIndex = 0;
    for (let j = 0; j < cacheSize; j++) {
      if (memory[j].toUpperCase() === cities[i].toUpperCase()) {
        cacheIn = true;
        cacheIndex = j;
        break;
      }
    }

    if (cacheIn) {
      hit += 1;
      memory.splice(cacheIndex, 1);
      memory.unshift(cities[i]);
    } else {
      hit += 5;
      memory.pop();
      memory.unshift(cities[i]);
    }
  }

  return hit;
}

// console.log(
//   solution(3, [
//     "Jeju",
//     "Pangyo",
//     "Seoul",
//     "NewYork",
//     "LA",
//     "Jeju",
//     "Pangyo",
//     "Seoul",
//     "NewYork",
//     "LA",
//   ])
// );

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
