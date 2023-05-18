function createSortedList() {
  const instance = {
    numbersList: [],
    size: 0,

    // methods
    add: function (element) {
      this.numbersList.push(element);
      this.numbersList.sort(this._comparor);
      this.size += 1;

      return instance;
    },

    remove: function (index) {
      this._validate(index);
      this.numbersList.splice(index, 1);
      this.size -= 1;

      return instance;
    },

    get: function (index) {
      this._validate(index);

      return this.numbersList[index];
    },

    // Helper methods
    _validate: function (index) {
      if (index < 0 || index >= this.numbersList.length) {
        throw new Error("Index is out of bounds");
      }
    },

    _comparor: function (a, b) {
      return a - b;
    },
  };

  return instance;
}

let list = createSortedList();
console.log(list.add(5).numbersList);
console.log(list.add(6).numbersList);
