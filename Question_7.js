function remove_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }
var input = [12, 5, 9, 6, 5.5, 71, 0];
var array = remove_element(input, 5);
console.log("Original Array:", input);
console.log("Array value:", array);
array.length = 0;
console.log("Empty Array:", array);

