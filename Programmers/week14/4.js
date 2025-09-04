//피로도
function solution(k, dungeons) {
  let max = 0;
  let len = dungeons.length;
  let dArr = Array.from({ length: len }, (_, i) => i);

  function getPermutation(arr, selectedNum) {
    if (selectedNum === 0) return [[]];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const fixed = arr[i];
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const prev = getPermutation(rest, selectedNum - 1);
      for (const p of prev) {
        result.push([fixed, ...p]);
      }
    }
    return result;
  }

  let order = getPermutation(dArr, len);
  console.log(order);

  for (let i = 0; i < order.length; i++) {
    if (max === len) return len;
    let energy = k;
    let clear = 0;
    let currentOrder = order[i];
    console.log("========================");
    console.log("현재 실행중인 order:", currentOrder);

    for (let j = 0; j < currentOrder.length; j++) {
      console.log("현재 실행중인 dungeons:", dungeons[currentOrder[j]]);
      if (energy >= dungeons[currentOrder[j]][0]) {
        energy -= dungeons[currentOrder[j]][1];
        clear++;
      } else {
        break;
      }
    }
    if (max < clear) {
      max = clear;
    }
  }

  return max;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
