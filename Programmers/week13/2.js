//귤 고르기
function solution(k, tangerine) {
  let Tdict = {};
  let count = 0;

  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i] in Tdict) {
      Tdict[tangerine[i]]++;
    } else {
      Tdict[tangerine[i]] = 1;
    }
  }

  const sortedArr = Object.entries(Tdict).sort(
    ([, valueA], [, valueB]) => valueB - valueA
  );

  let total = 0;
  for (let t of sortedArr) {
    total += t[1];
    count++;
    if (total >= k) {
      break;
    }
  }

  return count;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
