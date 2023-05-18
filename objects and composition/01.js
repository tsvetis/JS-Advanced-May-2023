function calorieObject(arrOfStr) {
  const result = {};

  for (let i = 0; i < arrOfStr.length; i += 2) {
    result[arrOfStr[i]] = Number(arrOfStr[i + 1]);
  }

  return result;
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
//{ Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
