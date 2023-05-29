function lockedProfile() {
  // constants
  const SHOW_MORE = "Show more";
  const HIDE_IT = "Hide it";

  // get elements
  const btnElements = Array.from(document.querySelectorAll("div button"));

  // attach event listener
  for (let btn of btnElements) {
    btn.addEventListener("click", show);
  }

  // on click event
  function show(e) {
    const divChildren = Array.from(e.target.parentElement.children);
    const locked = divChildren[2].checked;

    // if locked - do nothing
    if (locked) {
      return;
    }

    // else enable functionality
    const hiddenFieldsElement = e.target.previousElementSibling;

    if (e.target.textContent === SHOW_MORE) {
      hiddenFieldsElement.style.display = "inline";
      e.target.textContent = HIDE_IT;
      return;
    }

    hiddenFieldsElement.style.display = "";
    e.target.textContent = SHOW_MORE;
  }
}
