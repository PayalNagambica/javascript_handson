var jsonFile = require("./ancestor.json");




console.log(jsonFile.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
}));	