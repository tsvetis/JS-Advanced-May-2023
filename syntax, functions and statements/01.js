function fruitProblem(fruit, weightInGrams, money) {
  let weightInKg = Number(weightInGrams) / 1000;
  let costPerKg = weightInKg * Number(money);

  let output = `I need $${costPerKg.toFixed(2)} to buy ${weightInKg.toFixed(
    2
  )} kilograms ${fruit}.`;
  console.log(output);
}

fruitProblem("orange", 2500, 1.8);
// I need $4.50 to buy 2.50 kilograms orange.
fruitProblem("apple", 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.
