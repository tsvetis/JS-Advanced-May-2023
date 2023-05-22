function subtract() {
  const firstNumberValue = Number(document.getElementById("firstNumber").value);
  const secondNumberValue = Number(
    document.getElementById("secondNumber").value
  );
  const sum = firstNumberValue - secondNumberValue;

  document.getElementById("result").textContent = sum;
}
