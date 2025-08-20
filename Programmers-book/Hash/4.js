//의상
function solution(clothes) {
  let clothesDict = {};

  for (let c of clothes) {
    if (clothesDict[c[1]]) {
      clothesDict[c[1]]++;
    } else {
      clothesDict[c[1]] = 1;
    }
  }

  let result = 1;
  for (let type in clothesDict) {
    result *= clothesDict[type] + 1;
  }

  return result - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
