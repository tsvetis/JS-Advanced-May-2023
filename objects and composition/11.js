function jansNotation(arr) {
  // declare dictionary with operands and methods behind
  const calcMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => b / a,
  };

  const clonedArr = [...arr];
  const numbers = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length) {
      if (numbers.length === 1) {
        return numbers[0];
      }
      return "Error: too many operands!";
    }

    if (typeof clonedArr[i] === "number") {
      numbers.push(clonedArr[i]);
    } else {
      const operand = clonedArr[i];

      if (numbers.length < 2) {
        return "Error: not enough operands!";
      }

      const numbA = numbers.pop();
      const numbB = numbers.pop();
      const result = calcMap[operand](numbA, numbB);
      numbers.push(result);
    }
  }
}

jansNotation([3, 4, "+"]);
// 7
jansNotation([5, 3, 4, "*", "-"]);
// -7
