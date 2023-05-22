function solve() {
  // constants
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  // capture elements
  const inputValueByLowerCase = document
    .getElementById("text")
    .value.toLowerCase();
  const currentCaseValue = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  // validate case
  if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }

  //
  const arrOfStr = inputValueByLowerCase.split(" ");
  let ouput = "";
  let startingPoint = 0;

  if (currentCaseValue === CAMEL_CASE) {
    ouput += arrOfStr[0];
    startingPoint = 1;
  }

  for (let i = startingPoint; i < arrOfStr.length; i++) {
    const currentWord = arrOfStr[i];

    ouput +=
      currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = ouput;
  }
}
