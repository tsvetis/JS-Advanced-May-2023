function storeCatalog(input) {
  // sort the string
  const sortedInput = input.sort((a, b) => a.localeCompare(b));

  // build char : [ {"Appricot : 20.4} ]
  const dict = {};
  for (let i = 0; i < sortedInput.length; i++) {
    const element = sortedInput[i].split(" : ").join(": ");
    const firstLetter = element[0];

    if (dict[firstLetter] === undefined) {
      dict[firstLetter] = [];
    }

    dict[firstLetter].push(`  ${element}`);
  }

  let output = [];
  for (const key in dict) {
    const element = dict[key];
    output = [...output, key, ...element];
  }

  return output.join("\n");
}

storeCatalog([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

// A
//  Anti-Bug Spray: 15
//  Apple: 1.25
//  Appricot: 20.4
// B
//  Boiler: 300
// D
//  Deodorant: 10
// F
//  Fridge: 1500
// T
//  T-Shirt: 10
//  TV: 1499
