function solve() {
  // capture elements
  const menuToElement = document.getElementById("selectMenuTo");
  const menuToElementValue = menuToElement.value;

  const numberInputElement = document.getElementById("input");
  const numberInputValue = numberInputElement.value;

  const resultElement = document.getElementById("result");

  // btn element
  const buttonElement = document.getElementsByTagName("button")[0];
  const binaryMenuElement = document.createElement("option");
  binaryMenuElement.textContent = "Binary";
  binaryMenuElement.value = "binary";
  menuToElement.appendChild(binaryMenuElement);

  // hexa menu element
  const hexadecimalMenuElement = document.createElement("option");
  hexadecimalMenuElement.textContent = "Hexadecimal";
  hexadecimalMenuElement.value = "hexadecimal";
  menuToElement.appendChild(hexadecimalMenuElement);

  // dictionary with options
  const dict = {
    binary: Number(numberInputValue).toString(2),
    hexadecimal: Number(numberInputValue).toString(16).toUpperCase(),
  };

  // onclick
  buttonElement.addEventListener("click", (e) => {
    if (menuToElement.value === "binary") {
      resultElement.value = Number(numberInputElement.value).toString(2);
    } else if (menuToElement.value === "hexadecimal") {
      resultElement.value = Number(numberInputElement.value)
        .toString(16)
        .toUpperCase();
    }
  });
}
