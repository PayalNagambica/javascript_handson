var csv = require('csv')
var fs = require('fs')
var f = fs.createReadStream('datafile.csv')
var w = fs.createWriteStream('out.json')

w.write('[');

csv()
.from.stream(f, {columns:true})
.transform(function(row, index) {
    return (index === 0 ? '' : ',\n') + JSON.stringify(row);
})
.to.stream(w, {columns: true, end: false})
.on('end', function() {
     w.write(']');
     w.end();
 });