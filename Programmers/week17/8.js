function solution(dirs) {
  let visited = new Map(); // 출발지 [-1, 0] 이런 형태? value는 배열이고, ["U", "D", "L", "R"] 4가지가 들어갈 수 있게.
  let answer = 0;
  let dirsArr = dirs.split("");

  let start = "0,0";
  for (let i = 0; i < dirsArr.length; i++) {
    if (!visited.has(start)) {
      visited.set(start, []);
    }
    let arr = visited.get(start);
    console.log(arr, start, dirsArr[i], answer);

    if (dirsArr[i] === "U") {
      if (!arr.includes("U")) {
        arr.push("U");
        visited.set(start, arr);
        answer++;
      }
      startArr = start.split(",");
      startArr[1] = parseInt(startArr[1]) + 1;
      start = startArr.toString();
      //도착지 Key에서도 D을 추가해줘야 한다.
      destination = visited.get(start) || [];
      destination.push("D");
      visited.set(start, destination);
    } else if (dirsArr[i] === "D") {
      if (!arr.includes("D")) {
        arr.push("D");
        visited.set(start, arr);
        answer++;
      }
      startArr = start.split(",");
      startArr[1] = parseInt(startArr[1]) - 1;
      start = startArr.toString(); //도착지
      //도착지 Key에서도 U을 추가해줘야 한다.
      destination = visited.get(start) || [];
      destination.push("U");
      visited.set(start, destination);
    } else if (dirsArr[i] === "R") {
      if (!arr.includes("R")) {
        arr.push("R");
        visited.set(start, arr);
        answer++;
      }
      startArr = start.split(",");
      startArr[0] = parseInt(startArr[0]) + 1;
      start = startArr.toString();
      //도착지 Key에서도 L을 추가해줘야 한다.
      destination = visited.get(start) || [];
      destination.push("L");
      visited.set(start, destination);
    } else if (dirsArr[i] === "L") {
      if (!arr.includes("L")) {
        arr.push("L");
        visited.set(start, arr);
        answer++;
      }
      startArr = start.split(",");
      startArr[0] = parseInt(startArr[0]) - 1;
      start = startArr.toString();
      //도착지 Key에서도 R을 추가해줘야 한다.
      destination = visited.get(start) || [];
      destination.push("R");
      visited.set(start, destination);
    }
  }

  return answer;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
