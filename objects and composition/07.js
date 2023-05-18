function townsToJSON(towns) {
  // Transform data to matrix
  const matrix = towns
    .map((row) =>
      row
        .trim()
        .split("|")
        .map((cell) => cell.trim())
    )
    .map((row) => row.filter((cell) => cell !== ""));

  // Determine header and value data
  const headers = matrix[0];
  const data = matrix.slice(1);

  // MAP DATA
  const result = data.map((row) => {
    const tempDict = {};

    headers.forEach((header, index) => {
      const tryParseToNum = Number(row[index]);
      tempDict[header] = isNaN(tryParseToNum)
        ? row[index]
        : Number(tryParseToNum.toFixed(2));
    });

    return tempDict;
  });

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
// [{"Town":"Sofia", "Latitude":42.7, "Longitude":23.32},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
// [{"Town":"Veliko Turnovo", "Latitude":43.08, "Longitude":25.62},{"Town":"Monatevideo",
// "Latitude":34.5,"Longitude":56.11}]
