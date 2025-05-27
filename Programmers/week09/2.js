function solution(picks, minerals) {
  let tired_arr = [];
  let total_tired = 0;

  const totalTools = picks.reduce((a, b) => a + b, 0);
  const mineable = minerals.slice(0, totalTools * 5);

  for (let i = 0; i < mineable.length; i++) {
    if (mineable[i] === "diamond") {
      total_tired += 25;
    } else if (mineable[i] === "iron") {
      total_tired += 5;
    } else if (mineable[i] === "stone") {
      total_tired += 1;
    }

    if ((i + 1) % 5 === 0 || i + 1 === mineable.length) {
      tired_arr.push({ index: Math.floor(i / 5), tired: total_tired });
      total_tired = 0;
    }
  }

  tired_arr.sort((a, b) => b.tired - a.tired);

  let answer = 0;
  const fatigueTable = {
    0: { diamond: 1, iron: 1, stone: 1 },
    1: { diamond: 5, iron: 1, stone: 1 },
    2: { diamond: 25, iron: 5, stone: 1 },
  };

  for (let i = 0; i < tired_arr.length; i++) {
    let tool = -1;
    if (picks[0] > 0) {
      tool = 0;
      picks[0]--;
    } else if (picks[1] > 0) {
      tool = 1;
      picks[1]--;
    } else if (picks[2] > 0) {
      tool = 2;
      picks[2]--;
    } else {
      break;
    }

    const groupIndex = tired_arr[i].index;
    const start = groupIndex * 5;
    const end = Math.min(start + 5, mineable.length);

    for (let j = start; j < end; j++) {
      answer += fatigueTable[tool][mineable[j]];
    }
  }

  return answer;
}
