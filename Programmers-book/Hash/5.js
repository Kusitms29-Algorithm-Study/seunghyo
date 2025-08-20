//베스트앨범 lv3
function solution(genres, plays) {
  let genresDict = {};
  let songsByGenre = {};
  for (let i = 0; i < genres.length; i++) {
    if (genresDict[genres[i]]) {
      genresDict[genres[i]] += plays[i];
    } else {
      genresDict[genres[i]] = plays[i];
    }
    if (!songsByGenre[genres[i]]) {
      songsByGenre[genres[i]] = [];
    }
    songsByGenre[genres[i]].push({ id: i, plays: plays[i] });
  }

  const genreRank = Object.entries(genresDict)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  for (let genre of genreRank) {
    songsByGenre[genre].sort((a, b) => {
      if (b.plays !== a.plays) return b.plays - a.plays;
      return a.id - b.id;
    });
  }
  let answer = [];
  for (let genre of genreRank) {
    let songs = songsByGenre[genre];
    for (let i = 0; i < Math.min(2, songs.length); i++) {
      answer.push(songs[i].id);
    }
  }
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
//[4, 1, 3, 0]
