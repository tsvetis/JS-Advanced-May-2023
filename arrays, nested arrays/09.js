function magicMatrices(matrix) {
  const totalRowSum = matrix[0].reduce((acc, curr) => acc + curr, 0);

  for (let row = 0; row < matrix.length; row++) {
    let sumRow = 0;
    let sumCol = 0;

    for (let col = 0; col < matrix.length; col++) {
      sumRow += matrix[col][row];
      sumCol += matrix[row][col];
    }

    if (totalRowSum !== sumRow || totalRowSum !== sumCol) {
      return false;
    }
  }

  return true;
}

magicMatrices([
  [4, 5, 6], // 0
  [6, 5, 4], // 0
  [5, 5, 5], // 0
]);
// true

magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
// false

magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
// true
