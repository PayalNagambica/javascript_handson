function processData(data) {
  var result;
  var arrayOfKeys = Object.keys(data);
  
  result = arrayOfKeys
      .reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator.concat(data[currentValue]);
      }, [])
      .filter(function (arrayElement) {
        return arrayElement < 20;
      })
      .sort()
      .reverse()
      .join('');
  
  return result;
}

var input = {
  list1: [1, 21],
  list2: [9, 34],
  list3: [0.47, 87]
};

console.log("Sorted Output: "+processData(input));

