// Your code here
const {expect} =require("chai");

const {Triangle} = require('../problems/triangle');

describe('Triangle', () =>{
    describe('constructor', ()=>{
        it('should set the side lengths correctly', ()=>{
            const triangle = new Triangle(3,4,5);
            expect(triangle.side1).to.equal(3);
            expect(triangle.side2).to.equal(4);
            expect(triangle.side3).to.equal(5);
        });
    });

    describe('getPerimeter', ()=>{
        it('should return the perimeter of the triangle', ()=>{
            const triangle = new Triangle(3,4,5);
            expect(triangle.getPerimeter()).to.equal(12);
        });
    });

    describe('hasValidLengths', ()=>{
        it('should return true for valid triangle side lengths')
        const triangle = new Triangle(3, 4, 5);
        expect(triangle.hasValidSideLengths()).to.be.true;
      });

      it('should return false for invalid triangle side lengths', () => {
        const triangle = new Triangle(1, 1, 3);
        expect(triangle.hasValidSideLengths()).to.be.false;
      });
    });

    describe('validate()', () => {
      it('should set isValid to true for a valid triangle', () => {
        const triangle = new Triangle(3, 4, 5);
        triangle.validate();
        expect(triangle.isValid).to.be.true;
      });

      it('should set isValid to false for an invalid triangle', () => {
        const triangle = new Triangle(1, 1, 3);
        triangle.validate();
        expect(triangle.isValid).to.be.false;
      });
    });

    describe('getValidTriangles()', () => {
      it('should return only valid triangles from a list of triangle instances', () => {
        const triangle1 = new Triangle(3, 4, 5);
        const triangle2 = new Triangle(1, 1, 3);
        const triangle3 = new Triangle(6, 8, 10);
        const validTriangles = Triangle.getValidTriangles(triangle1, triangle2, triangle3);
        expect(validTriangles).to.deep.equal([triangle1, triangle3]);
      });
    });


    const { Scalene } = require('../problems/triangle');

// Add these tests below the Triangle tests
describe('Scalene', () => {
  describe('constructor', () => {
    it('should inherit from Triangle and set the side lengths correctly', () => {
      const scalene = new Scalene(3, 4, 5);
      expect(scalene.side1).to.equal(3);
      expect(scalene.side2).to.equal(4);
      expect(scalene.side3).to.equal(5);
    });

    it('should set isValidTriangle based on the validity of the side lengths', () => {
      const scalene = new Scalene(3, 4, 5);
      expect(scalene.isValidTriangle).to.be.true;

      const invalidScalene = new Scalene(1, 1, 3);
      expect(invalidScalene.isValidTriangle).to.be.false;
    });
  });

  describe('isScalene()', () => {
    it('should return true for a valid scalene triangle', () => {
      const scalene = new Scalene(3, 4, 5);
      expect(scalene.isScalene()).to.be.true;
    });

    it('should return false for an invalid scalene triangle', () => {
      const notScalene = new Scalene(3, 3, 3);
      expect(notScalene.isScalene()).to.be.false;
    });
  });

  describe('validate()', () => {
    it('should set isValidScalene to true for a valid scalene triangle', () => {
      const scalene = new Scalene(3, 4, 5);
      scalene.validate();
      expect(scalene.isValidScalene).to.be.true;
    });

    it('should set isValidScalene to false for an invalid scalene triangle', () => {
      const notScalene = new Scalene(3, 3, 3);
      notScalene.validate();
      expect(notScalene.isValidScalene).to.be.false;
    });
  });
});

const { Isosceles } = require('../problems/triangle');

// Add these tests below the Triangle tests
describe('Isosceles', () => {
  describe('constructor', () => {
    it('should inherit from Triangle and set the side lengths correctly', () => {
      const isosceles = new Isosceles(3, 3, 4);
      expect(isosceles.side1).to.equal(3);
      expect(isosceles.side2).to.equal(3);
      expect(isosceles.side3).to.equal(4);
    });

    it('should set isValidTriangle based on the validity of the side lengths', () => {
      const isosceles = new Isosceles(3, 3, 4);
      expect(isosceles.isValidTriangle).to.be.true;

      const invalidIsosceles = new Isosceles(1,1 ,3 );
      expect(invalidIsosceles.isValidTriangle).to.be.false;
    });
  });

  describe('isIsosceles()', () => {
    it('should return true for a valid isosceles triangle', () => {
      const isosceles = new Isosceles(3, 3, 4);
      expect(isosceles.isIsosceles()).to.be.true;
    });

    it('should return false for an invalid isosceles triangle', () => {
      const notIsosceles = new Isosceles(3, 4, 5);
      expect(notIsosceles.isIsosceles()).to.be.false;
    });
  });

  describe('validate()', () => {
    it('should set isValidIsosceles to true for a valid isosceles triangle', () => {
      const isosceles = new Isosceles(3, 3, 4);
      isosceles.validate();
      expect(isosceles.isValidIsosceles).to.be.true;
    });

    it('should set isValidIsosceles to false for an invalid Isosceles triangle', () => {
      const notIsosceles = new Isosceles(3, 4, 5);
      notIsosceles.validate();
      expect(notIsosceles.isValidIsosceles).to.be.false;
    });
  });
});
