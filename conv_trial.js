var fs=require('fs'); 
var csvData='./datafile.csv';

console.log('Initiating the process');
fs.readFile(csvData , 'utf8',function(error,data)
  //.replace(/\s*\/\/.+/g,")
  //.replace(/,(\s*\})/g,'}'){

var lines = data.split('\n');
  var colNames = lines[0].split(',');
  var records=[];
  
  for(var i = 1; i < lines.length; i++) {
    var record = {};
    var bits = lines[i].split(',');
    for (var j = 0 ; j < bits.length ; j++) {
      record[colNames[j]] = bits[j];
    }
    records.push(record);
    var json = JSON.stringify(records);
    fs.writeFile('datafile.json',json);
  }
  console.log(records);
  console.log('proceeding the process');
  return records;
});


