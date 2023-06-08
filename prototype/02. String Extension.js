(function solution() {
  // ensureStart
  String.prototype.ensureStart = function (str) {
    const actualStr = this.toString();
    if (!actualStr.startsWith(str)) {
      return `${str}${actualStr}`;
    }

    return actualStr;
  };

  // ensureEnd
  String.prototype.ensureEnd = function (str) {
    const actualStr = this.toString();
    if (!actualStr.endsWith(str)) {
      return `${actualStr}${str}`;
    }

    return actualStr;
  };

  // isEmpty
  String.prototype.isEmpty = function () {
    return this.toString().length === 0;
  };

  // truncate
  String.prototype.truncate = function (n) {
    const ELLIPSIS = "...";
    const SINGLE_POINT = ".";
    const strValue = this.toString();

    if (n <= 3) {
      return SINGLE_POINT.repeat(n);
    }

    if (strValue.length <= n) {
      return strValue;
    }

    const truncValue = strValue.substr(0, n - 2);
    const lastIndex = truncValue.lastIndexOf(" ");

    if (lastIndex !== -1) {
      return `${strValue.substr(0, lastIndex)}${ELLIPSIS}`;
    }

    return `${strValue.substr(0, n - 3)}${ELLIPSIS}`;
  };

  // format
  String.format = function (string, ...params) {
    let str = string;

    for (let i = 0; i < params.length; i++) {
      let index = str.indexOf(`{${i}}`);

      while (index !== -1) {
        str = str.replace(`{${i}}`, params[i]);
        index = str.indexOf(`{${i}}`);
      }
    }

    return str;
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);

str = str.ensureStart("hello ");
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);

str = String.format("jumps {0} {1}", "dog");
console.log(str);

// OUTPUT
//      'my string' // 'my' already present
//      'hello my string'
//      'hello my string' // length is 15
//      'hello my...' // length is 11
//      'hello...'
//      'h...'
//      '..'
//      'The quick brown fox'
//      'jumps dog {1}' // no parameter at 1

console.log("-----------");
function solve() {
  console.log("invoked manually1");
}
solve();

const solve1 = function () {
  console.log("invoked manually2");
};
solve1();

// IIFE -> immediately invoked function expression
(function () {
  console.log("invoked automatically");
})();
