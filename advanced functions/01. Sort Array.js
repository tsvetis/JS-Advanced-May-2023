function solve(arrayOfNumbers, type) {
  // dictionary
  const dict = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  const result = arrayOfNumbers.sort(dict[type]);
  return result;
}

solve([14, 7, 17, 6, 8], "asc");
// [6, 7, 8, 14, 17]
solve([14, 7, 17, 6, 8], "desc");
// [17, 14, 8, 7, 6]
