var fs= require('fs');

console.log("Process Initiation");
var config = fs.readFileSync('./conv_trial.json');
//var population_2013 = Population (Millions) - 2013;
config = JSON.parse(config);
console.log("Data from Json : ",config);


console.log("Process End");