function solve() {
  // capture elements
  const table = document.querySelector("table.table tbody");
  const [input, output] = Array.from(document.querySelectorAll("textarea"));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));

  // attach events
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  // elements creation helper functions
  function p(...content) {
    return createElement("p", {}, ...content);
  }

  function td(...content) {
    return createElement("td", {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
      element[prop] = props[prop];
    }
    for (let entry of content) {
      if (typeof entry == "string" || typeof entry == "number") {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }

    return element;
  }

  // on click events
  const items = [];

  /* # table generation # */
  function generate(e) {
    // read input JSON and parse it
    // for every array element, create table row
    const data = JSON.parse(input.value);

    for (let item of data) {
      // create checkbox
      const checkBox = createElement("input", { type: "checkbox" });

      // create row
      const { name, price, decFactor, img } = item;
      const row = createElement(
        "tr",
        {},
        td(createElement("img", { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkBox)
      );

      // push items
      items.push({
        element: row,
        isChecked,
        item,
      });

      function isChecked() {
        return checkBox.checked;
      }

      // append to table
      table.appendChild(row);
    }
  }

  function buy(e) {
    const furniture = items
      .filter((i) => i.isChecked())
      .reduce(
        (acc, { item: c }, i, a) => {
          acc.names.push(c.name);
          acc.total += Number(c.price);
          acc.decFactor += Number(c.decFactor) / a.length;
          return acc;
        },
        { names: [], total: 0, decFactor: 0 }
      );

    const result = `Bought furniture: ${furniture.names.join(", ")}
  Total price: ${furniture.total.toFixed(2)}
  Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}
