function addAndRemoveElements(arr) {
  let num = 1;
  const result = [];

  arr.forEach((cmd) => {
    if (cmd === "add") {
      result.push(num);
    } else {
      result.pop();
    }
    num += 1;
  });

  const output = result.length >= 1 ? result.join("\n") : "Empty";
  console.log(output);
}

addAndRemoveElements(["add", "add", "add", "add"]);
console.log("---------");
// 1 2 3 4
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
console.log("---------");
// 1 4 5
addAndRemoveElements(["remove", "remove", "remove"]);
// Empty
