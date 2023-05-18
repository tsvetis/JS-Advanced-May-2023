function sortArrByTwoCriteria(arr) {
  const sortedArr = arr.sort((a, b) => {
    const firstCriteria = a.length - b.length;
    const secondCriteria = a.localeCompare(b);
    return firstCriteria || secondCriteria;
  });

  console.log(sortedArr.join("\n"));
}

sortArrByTwoCriteria(["alpha", "beta", "gamma"]);
console.log("------");
// beta alpha gamma
sortArrByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("------");
// Jack Isacc George Theodor Harrison
sortArrByTwoCriteria(["test", "Deny", "omen", "Default"]);
// Deny omen test Default
