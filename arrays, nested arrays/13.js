function spiralMatrix(num1, num2) {
  const matrix = new Array(num1).fill().map(() => new Array(num2).fill(0));
  let x = 0;
  let y = 0;
  let step = 0;

  for (let i = 0; i < num1 ** 2; ) {
    // block 1
    while (y + step < num2) {
      i += 1;
      matrix[x][y] = i;
      y += 1;
    }

    y -= 1;
    x += 1;

    // block 2
    while (x + step < num2) {
      i += 1;
      matrix[x][y] = i;
      x += 1;
    }

    x -= 1;
    y -= 1;

    // block 3
    while (y >= step) {
      i += 1;
      matrix[x][y] = i;
      y -= 1;
    }

    x -= 1;
    y += 1;
    step += 1;

    // block 4
    while (x >= step) {
      i += 1;
      matrix[x][y] = i;
      x -= 1;
    }

    y += 1;
    x += 1;
  }

  for (const row of matrix) {
    console.log(row.join(" "));
  }
}

spiralMatrix(5, 5);
/**
    1 2 3 4 5
    16 17 18 19 6
    15 24 25 20 7
    14 23 22 21 8
    13 12 11 10 9
 */
spiralMatrix(3, 3);
/**
    1 2 3
    8 9 4
    7 6 5
 */
