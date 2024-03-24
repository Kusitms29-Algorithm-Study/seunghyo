const filePath = process.platform == "linux" ? "/dev/stdin" : "./example.txt";
let N = Number(require("fs").readFileSync(filePath).toString());
let answer = 0;
while (true) {
  if (N % 5 == 0) {
    answer += N / 5;
    break;
  }

  N -= 2;
  answer++;

  if (N < 0) {
    answer = -1;
    break;
  }
}
console.log(answer);
