function cookingByNumbers(...params) {
  let number = Number(params[0]);

  const commandsDictionary = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),
    spice: (x) => x + 1,
    bake: (x) => x * 3,
    fillet: (x) => x - x * 0.2,
  };

  for (let i = 1; i < params.length; i++) {
    const cmd = params[i];

    number = commandsDictionary[cmd](number);
    console.log(number);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
