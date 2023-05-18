function sortingNumbers(arrOfNums) {
  // SORT ASC ORDER
  const sortedNums = arrOfNums.sort((numA, numB) => numA - numB);
  const result = [];

  while (sortedNums.length !== 0) {
    // get first
    const firstEl = sortedNums.shift();
    // get last
    const lastEl = sortedNums.pop();

    // add them to result
    result.push(firstEl, lastEl);
  }

  // output the result
  return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
