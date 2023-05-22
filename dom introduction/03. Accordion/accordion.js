function toggle() {
  // constants
  const MORE = "More";
  const LESS = "Less";

  // capture elements
  const buttonSpan = document.querySelector(".button");
  const divWrapperText = document.querySelector("#extra");

  // toggle functionality
  // change text of the button
  buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

  // hide/show the text
  divWrapperText.style.display =
    divWrapperText.style.display === "none" ||
    divWrapperText.style.display === ""
      ? "block"
      : "none";
}
