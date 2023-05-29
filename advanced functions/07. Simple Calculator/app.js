function calculator() {
  // const
  const PLUS_SIGN = "+";
  const MINUS_SIGN = "-";

  // dictionary
  const html = {
    s1: "",
    s2: "",
    output: "",
  };

  const OPERANDS = {
    [PLUS_SIGN]: (a, b) => a + b,
    [MINUS_SIGN]: (a, b) => a - b,
  };

  // helper function
  function calc(s1Value, s2Value, operand) {
    return OPERANDS[operand](Number(s1Value), Number(s2Value));
  }

  return {
    init: (selector1, selector2, resultSelector) => {
      debugger;
      html.s1 = document.querySelector(selector1);
      html.s2 = document.querySelector(selector2);
      html.output = document.querySelector(resultSelector);
    },
    add: () => {
      debugger;
      html.output.value = calc(html.s1.value, html.s2.value, PLUS_SIGN);
    },
    subtract: () => {
      debugger;
      html.output.value = calc(html.s1.value, html.s2.value, MINUS_SIGN);
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
