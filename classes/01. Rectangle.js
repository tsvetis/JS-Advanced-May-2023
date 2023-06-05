class Rectangle {
  constructor(w, h, c) {
    this._width = w;
    this._height = h;
    this._color = c;
  }

  get width() {
    // validation
    return this._width;
  }

  get height() {
    // validation
    return this._height;
  }

  get color() {
    // validation
    return this._color;
  }

  // methods
  calcArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
