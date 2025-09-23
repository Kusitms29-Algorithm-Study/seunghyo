function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];

    if (x % 2 === 0) {
      answer.push(x + 1);
    } else {
      let bin = x.toString(2).split("");

      let j = bin.length - 1;
      while (j >= 0 && bin[j] === "1") {
        j--;
      }

      if (j === -1) {
        bin.unshift("0");
        j = 0;
      }

      bin[j] = "1";
      bin[j + 1] = "0";

      answer.push(parseInt(bin.join(""), 2));
    }
  }

  return answer;
}

console.log(solution([2, 7, 15]));
