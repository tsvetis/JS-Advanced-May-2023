function rotateArray(arr, num) {
  const collectionOfStr = [...arr];

  for (let i = 0; i < num; i++) {
    const lastNumber = collectionOfStr.pop();
    collectionOfStr.unshift(lastNumber);
  }

  console.log(collectionOfStr.join(" "));
  return collectionOfStr;
}

// Source of truth
let arrOfStr = ["1", "2", "3", "4"];
arrOfStr = rotateArray(arrOfStr, 2);
console.log("invoked from here ", arrOfStr);

// 3 4 1 2
// console.log("--------");
// rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
// Orange Coconut Apple Banana
