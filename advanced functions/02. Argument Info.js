function solve(...args) {
  const obj = {};

  // sum while looping the arguments
  args.forEach((arg) => {
    const typeOfArg = typeof arg;
    console.log(`${typeOfArg}: ${arg}`);

    obj[typeOfArg] = obj[typeOfArg]
      ? (obj[typeOfArg] += 1)
      : (obj[typeOfArg] = 1);
  });

  // sort DESC
  const sortedInDescOrder = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  // print
  sortedInDescOrder.forEach(([key, value]) => console.log(`${key} = ${value}`));
}

solve(
  "cat",
  42,
  function () {
    console.log("Hello world!");
  },
  "asdsad",
  "dsdsad",
  1
);
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
