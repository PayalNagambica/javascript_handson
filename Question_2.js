var Books = [ 
    {
        book_id: 2314,
        title: 'My experiments with Truth.',
        author: 'Mahatma M.K.Gandhi',
        status: false
    },
    {
        book_id: 1524,
        title: 'Geetanjali',
        author: 'Rabindra Nath Tagore',
        status: true
    },
    {
        book_id: 7864,
        title: 'Origin of species',
        author: 'charles Darwin',
        status: false
    },
    {
        book_id: 0981,
        title: 'Le Contract Social',
        author: 'Jean Jacques Rousseau',
        status: true
    }];


var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x) 
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};

var newobj = Books.sort(sort_by('book_id', true, parseInt));
console.log(newobj);

for (var i = 0; i < Books.length; i++) 
   {
    var book = "'" + Books[i].title + "'" + ' by ' + Books[i].author + ".";
    if (Books[i].status == true) {
      console.log("Completed Reading:" + book);
    } 
   }




