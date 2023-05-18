function sortListOfNames(listOfNames) {
  const sortedArray = listOfNames.sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );

  sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));
}

sortListOfNames(["John", "Bob", "Christina", "Ema"]);
/**
    1.Bob
    2.Christina
    3.Ema
    4.John
 */
