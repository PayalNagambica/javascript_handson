var fs = require('fs');
var jsonQuery = require('json-query');
var _ = require('underscore');

var data = JSON.parse(fs.readFileSync('conv_trial.json', 'utf8'));
//var gdpPopulation = [];
//var result = jsonQuery('gdpPopulation[**][*Population (Millions) - 2013]', {data: data}).value

//console.log(result);

//var population13 = filter.obj(Population (Millions) - 2013);
var sorted = _.sortBy(data, 'Population (Millions) - 2013').reverse()
	

/*var res = new JefNode(obj).filter(function(node) {
    if (node.has('Population (Millions) - 2013') && node.value.salary > 200) {
        return node.value.username + ' ' + node.value.salary;
    }
);*/
console.log(sorted);
fs.writeFile('dataFileSorted.json',sorted);
//console.log(population13);
//console.log(obj);




