
function getCombinations(arr, comboLength) {
  if (comboLength === 0) return [[]];
  if (comboLength > arr.length) return [];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const head = arr[i];
    const tailCombinations = getCombinations(arr.slice(i + 1), comboLength - 1);
    for (const tail of tailCombinations) {
      result.push([head, ...tail]);
    }
  }

  return result;
}
