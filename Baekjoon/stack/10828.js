const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
//입력
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]); // 명령의 개수
const commands = input.slice(1); // 명령 목록
//출력
const stack = []; // 스택 배열
const results = []; // 결과 저장 배열

commands.forEach((command) => {
  if (command.startsWith("push")) {
    const [, value] = command.split(" "); // push 명령어의 값 추출 ex) push 1 이라면 1 추출
    stack.push(value);
  } else if (command === "pop") {
    //스택의 길이가 0보다 크면 pop 한뒤 반환
    results.push(stack.length > 0 ? stack.pop() : -1);
  } else if (command === "size") {
    results.push(stack.length);
  } else if (command === "empty") {
    results.push(stack.length === 0 ? 1 : 0);
  } else if (command === "top") {
    results.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  }
});

console.log(results.join("\n"));
