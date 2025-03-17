const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0].split(" ").map((i) => BigInt(i));
const distance = input[1].split(" ").map((i) => BigInt(i));
const price = input[2].split(" ").map((i) => BigInt(i));

let curPrice = price[0];
let cost = 0n;

for (let i = 0; i < n - 1; i++) {
  cost += curPrice * distance[i];
  if (curPrice > price[i + 1]) curPrice = price[i + 1];
}

console.log(String(cost));
