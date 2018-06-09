var fs=require("fs"); 

var csvFileName="./datafile.csv";
//var jsonfile = require('jsonfile')
console.log("Process initiated");

fs.readFile(csvFileName , 'utf8',function(error,data){

  var lines=csvFileName.split("\n");
  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

    var obj = [];
    var currentline=lines[i].split(",");
    
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }
    }
    result.push(obj);
	console.log(result); //here is your result json object
    var json = JSON.stringify(result);
	fs.writeFile('dataFile11.json',json);

  
  
});

console.log('seems like process completed!!!');




