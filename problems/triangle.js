// Your code here
class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }

    getPerimeter() {
      return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
      const [a, b, c] = [this.side1, this.side2, this.side3].sort((x, y) => x - y);
      return a + b > c;
    }

    validate() {
      this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
      return triangles.filter(triangle => triangle.hasValidSideLengths());
    }
  }

  module.exports = { Triangle };

  class Scalene extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene() {
      return this.isValidTriangle && this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3;
    }

    validate() {
      this.isValidScalene = this.isScalene();
    }
  }

  module.exports = { Triangle, Scalene };

  class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles() {
      return this.isValidTriangle &&
             (this.side1 === this.side2 ||
              this.side1 === this.side3 ||
              this.side2 === this.side3);
    }

    validate() {
      this.isValidIsosceles = this.isIsosceles();
    }
  }

  module.exports = { Triangle, Scalene, Isosceles };
