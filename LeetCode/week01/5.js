var floodFill = function (image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;
  const defaultColor = image[sr][sc];

  if (defaultColor === color) {
    return image;
  }
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function fillColor(row, col) {
    image[row][col] = color;

    for (let [dr, dc] of direction) {
      nr = row + dr;
      nc = col + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < m &&
        nc < n &&
        image[nr][nc] === defaultColor
      ) {
        fillColor(nr, nc);
      }
    }
  }

  fillColor(sr, sc);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
