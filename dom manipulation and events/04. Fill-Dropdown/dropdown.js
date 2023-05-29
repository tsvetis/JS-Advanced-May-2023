function addItem() {
  // capture elements
  const inputTextElement = document.querySelector("#newItemText");
  const inputValueElement = document.querySelector("#newItemValue");
  const menu = document.querySelector("#menu");
  const option = document.createElement("option");

  // setupoption
  option.textContent = inputTextElement.value;
  option.value = inputValueElement.value;

  // append content
  menu.appendChild(option);

  // clear input value
  inputValueElement.value = "";
  inputTextElement.value = "";
}
