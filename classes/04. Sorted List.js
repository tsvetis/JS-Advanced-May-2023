class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  // helper methods
  updateSize() {
    this.size = this.list.length;
  }

  orderList() {
    this.list.sort((a, b) => a - b);
  }

  // main functionalities
  add(e) {
    this.list.push(e);
    this.updateSize();
    this.orderList();
  }

  remove(i) {
    if (this.list[i] === undefined) {
      return;
    }

    this.list.splice(i, 1);
    this.updateSize();
    this.orderList();
  }

  get(i) {
    if (this.list[i] === undefined) {
      return;
    }

    return this.list[i];
  }
}

const list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

// Output
// 6
// 7
