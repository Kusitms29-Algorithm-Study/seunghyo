//조합 출력
function getCombinations(arr, n) {
  const results = [];
  function combine(start, combo) {
    if (combo.length === n) {
      results.push(combo.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }
  combine(0, []);
  return results;
}

console.log(getCombinations(["A", "B", "C"], 2));
