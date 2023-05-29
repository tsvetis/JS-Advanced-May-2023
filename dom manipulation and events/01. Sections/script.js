function create(words) {
  const content = document.getElementById("content");

  for (const word of words) {
    // create elements
    const div = document.createElement("div");
    const paragraph = document.createElement("p");

    // setup paragraph
    paragraph.textContent = word;
    paragraph.style.display = "none";

    // setup div
    div.appendChild(paragraph);
    div.addEventListener("click", reveal);

    // append to content
    content.appendChild(div);
  }

  function reveal(e) {
    e.currentTarget.children[0].style.display = "block";
  }
}
