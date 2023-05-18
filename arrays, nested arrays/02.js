// function printNthElement(arr, step) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (i % step === 0) {
//       output.push(element);
//     }
//   }

//   return output;
// }

function printNthElement(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr[i]);
  }

  return result;
}

//                0     1    2     3    4
printNthElement(["5", "20", "31", "4", "20"], 2);
// ['5', '31', '20']
console.log("------");
printNthElement(["dsa", "asd", "test", "tset"], 2);
// ['dsa', 'test']
console.log("------");
printNthElement(["1", "2", "3", "4", "5"], 6);
// ['1']
