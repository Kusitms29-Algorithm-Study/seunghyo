function solution(n, words) {
  let turn = 0;
  let person = 0;
  let usedWords = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const before = words[i - 1][words[i - 1].length - 1];
    person = (i % n) + 1;
    turn = Math.floor(i / n) + 1;

    if (before !== word[0] || usedWords.includes(word)) {
      return [person, turn];
    }

    usedWords.push(word);
  }

  return [0, 0];
}

// console.log(
//   solution(3, [
//     "tank",
//     "kick",
//     "know",
//     "wheel",
//     "land",
//     "dream",
//     "mother",
//     "robot",
//     "tank",
//   ])
// );
// console.log(
//   solution(5, [
//     "hello",
//     "observe",
//     "effect",
//     "take",
//     "either",
//     "recognize",
//     "encourage",
//     "ensure",
//     "establish",
//     "hang",
//     "gather",
//     "refer",
//     "reference",
//     "estimate",
//     "executive",
//   ])
// );

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
