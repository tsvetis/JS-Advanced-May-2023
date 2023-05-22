function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const rows = document.querySelectorAll("tbody tr");

  function onClick() {
    const inputValueToLower = document
      .getElementById("searchField")
      .value.toLowerCase();

    for (let row of rows) {
      const rowTextToLower = row.textContent.toLowerCase();

      if (rowTextToLower.includes(inputValueToLower)) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    }
  }
}
