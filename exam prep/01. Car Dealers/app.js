window.addEventListener("load", solve);

function solve() {
  // capture inputs
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");

  // capture other elements
  const publishBtn = document.getElementById("publish");
  const tBody = document.getElementById("table-body");
  const carsListUl = document.getElementById("cars-list");
  const profitEl = document.getElementById("profit");

  // attach events
  publishBtn.addEventListener("click", publish);

  // callbacks
  function publish(e) {
    debugger;
    e.preventDefault();

    const makeInputValue = makeInput.value;
    const modelInputValue = modelInput.value;
    const yearInputValue = yearInput.value;
    const fuelInputValue = fuelInput.value;
    const originalCostInputValue = Number(originalCostInput.value);
    const sellingPriceInputValue = Number(sellingPriceInput.value);

    if (
      !makeInputValue ||
      !modelInputValue ||
      !yearInputValue ||
      !fuelInputValue ||
      sellingPriceInputValue <= originalCostInputValue
    ) {
      return;
    }

    // create tr
    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    // create td's
    const makeTdEl = document.createElement("td");
    makeTdEl.textContent = makeInputValue;

    const modelTdEl = document.createElement("td");
    modelTdEl.textContent = modelInputValue;

    const yearTdEl = document.createElement("td");
    yearTdEl.textContent = yearInputValue;

    const fuelTdEl = document.createElement("td");
    fuelTdEl.textContent = fuelInputValue;

    const originalCostTdEl = document.createElement("td");
    originalCostTdEl.textContent = originalCostInputValue;

    const sellingPriceTdEl = document.createElement("td");
    sellingPriceTdEl.textContent = sellingPriceInputValue;

    const buttonsTdEl = document.createElement("td");

    // define buttons
    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";

    const sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.textContent = "Sell";

    // attach buttons to td
    buttonsTdEl.appendChild(editBtn);
    buttonsTdEl.appendChild(sellBtn);

    // attach created td's to the tr
    trEl.appendChild(makeTdEl);
    trEl.appendChild(modelTdEl);
    trEl.appendChild(yearTdEl);
    trEl.appendChild(fuelTdEl);
    trEl.appendChild(originalCostTdEl);
    trEl.appendChild(sellingPriceTdEl);
    trEl.appendChild(buttonsTdEl);

    // attach row to tbody
    tBody.appendChild(trEl);

    // clear
    clearAll();

    // inner callbacks
    editBtn.addEventListener("click", (e) => {
      debugger;
      e.preventDefault();

      // map data
      makeInput.value = makeInputValue;
      modelInput.value = modelInputValue;
      yearInput.value = yearInputValue;
      fuelInput.value = fuelInputValue;
      originalCostInput.value = originalCostInputValue;
      sellingPriceInput.value = sellingPriceInputValue;

      // remove tr
      trEl.remove();
    });

    sellBtn.addEventListener("click", (e) => {
      debugger;
      e.preventDefault();

      // create li
      const liEl = document.createElement("li");
      liEl.classList.add("each-list");

      // create span's
      const makeModelSpan = document.createElement("span");
      makeModelSpan.textContent = `${makeInputValue} ${modelInputValue}`;

      const yearSpan = document.createElement("span");
      yearSpan.textContent = yearInputValue;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = sellingPriceInputValue - originalCostInputValue;

      // attach spans to li
      liEl.appendChild(makeModelSpan);
      liEl.appendChild(yearSpan);
      liEl.appendChild(priceSpan);

      // attach li to ul (cars-list)
      carsListUl.appendChild(liEl);

      // remove tr
      trEl.remove();

      // populate the profit
      profitEl.textContent = (
        Number(profitEl.textContent) +
        sellingPriceInputValue -
        originalCostInputValue
      ).toFixed(2);
    });
  }

  function clearAll() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";
  }
}
