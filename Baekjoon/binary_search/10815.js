const filePath = process.platform === "linux" ? "/dev/stdin" : "ans.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let N = input[0],
  //set : 순서가 없는 중복되지 않은 데이터의 집합
  N_cards = new Set(input[1].split(" ")),
  M = input[2],
  M_cards = input[3].split(" ");

const result = [];
for (let card of M_cards) {
  N_cards.has(card) ? result.push(1) : result.push(0);
}

console.log(result.join(" "));
