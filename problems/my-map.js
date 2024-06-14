function myMap(inputArray, callback) {
  // Your code here
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(callback(inputArray[i], i, inputArray));
  }
  return result;
}


module.exports = myMap;
