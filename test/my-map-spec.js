const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;

chai.use(spies);

const myMap = require('../problems/my-map');

describe('myMap', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3];
  });

  it('should not mutate the passed-in array argument', () => {
    const originalArray = [...array];
    myMap(array, x => x * 2);
    expect(array).to.deep.equal(originalArray);
  });

  it('should not call the built-in Array.map', () => {
    const mapSpy = chai.spy.on(array, 'map');
    myMap(array, x => x * 2);
    expect(mapSpy).to.not.have.been.called();
  });

  it('should invoke the passed-in callback once for each element in the array', () => {
    const callback = chai.spy(x => x * 2);
    myMap(array, callback);
    expect(callback).to.have.been.called.exactly(array.length);
  });
});
