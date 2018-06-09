var jsonFile = require('./ancestor.json');

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var maleEighty = jsonFile.filter(function(person) {
    return ((person.died - person.born >80 ) && (person.sex == "m"));
});
console.log(map(maleEighty, function(person) {
  return person.name;
}));

console.log(jsonFile.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));

//[ 'Philibert Haverbeke', 'Emile Haverbeke', 'Maria Haverbeke' ]