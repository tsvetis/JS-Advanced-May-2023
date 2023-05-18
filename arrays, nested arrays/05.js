function extractSubsetFromArr(arr) {
  let biggest = Number.MIN_SAFE_INTEGER;

  const output = arr.reduce((acc, curr) => {
    if (curr >= biggest) {
      biggest = curr;

      const tempArr = acc;
      tempArr.push(curr);
      return tempArr;
    }

    return acc;
  }, []);

  return output;
}

extractSubsetFromArr([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("--------------");
// [1, 3, 8, 10, 12, 24]
extractSubsetFromArr([1, 2, 3, 4]);
console.log("--------------");
// [1, 2, 3, 4]
extractSubsetFromArr([20, 3, 2, 15, 6, 1]);
// [20]
