function validate() {
  // capture events
  const emailInput = document.getElementById("email");

  // attach events
  emailInput.addEventListener("change", onChange);

  // callbacks
  function onChange(e) {
    const { target } = e;
    const targetStringValue = target.value;

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const isRemoveOperation = pattern.test(targetStringValue);

    const operation = isRemoveOperation ? "remove" : "add";
    target.classList[operation]("error");
  }
}
