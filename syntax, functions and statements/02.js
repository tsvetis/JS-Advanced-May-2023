function gcd(firstNum, secondNum) {
  while (secondNum) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }

  console.log(firstNum);
}

gcd(15, 5);
// 5
gcd(2154, 458);
// 2
