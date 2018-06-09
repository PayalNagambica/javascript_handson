var fs = require('fs');
var family = "./family.json";
    //to find all the name
   // name = family.find('name');
 
//to print list of all name
console.log(name.value());
 
//will give you ["James Martin", "Michelle", "Matthew", "Angela", "William", "David Thompson", "Amy", "Edward", "Dorothy", "Timothy", "Thomas Young", "Sharon", "Jason", "Carol", "William", "Brenda", "Timothy", "Jason Martinez", "Jessica", "Daniel", "Thomas Gonzalez", "Brenda", "George", "Dorothy", "Brian", "James Lee", "Sarah", "Frank", "Carol", "Larry", "Kenneth Brown", "Ruth", "Brian", "Lisa", "Scott", "Sandra", "Charles", "Thomas Lee", "Patricia", "Scott", "Jennifer", "George", "Robert Anderson", "Angela", "James"]
 
//finding name with qualifier
//name which start with m
var name = family.find('name', function () {
    return this[0].toLowerCase() == 'm'
});
 
console.log(name.value());
//will return  ["Michelle", "Matthew"]
 
//to find all the husband's name whose age is grater than 24
var name = family.find('husband', function () {
    return this.age > 24;
}).find('name');
 
console.log(name.value());
//will return ["Matthew", "Edward", "Timothy", "George", "Larry", "Charles", "Scott"]