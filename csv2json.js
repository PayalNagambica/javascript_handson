var fs = require('fs');
var csv = "./datafile.csv";

  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++)
  {
    var obj = {};
    var currentline=lines[i].split(",");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
  }

    result.push(obj);
    var eventstring = new String();
    eventstring = result.toString().replace(/"/g, "");
  }
  
  saveText( JSON.stringify(eventstring), "./filename.json" );




/*var csv_data = 'apples,oranges,grapes,peach,pineapple';
var csv_array = csv_data.split(',');
var object = {};
var arr = [];
for(var i=0; i<csv_array.length; i++){
    arr.push({name:csv_array[i]});
}
object['fruits'] = arr;
console.log(object);*/

//var eventstring = new String();

