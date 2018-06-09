var input = [1, 2, 3, 4];
function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
   
//Function for Subset 
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

//Function for Greater Elements
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }

var output = input.filter(BiggerElements(3));
console.log("Subset Elements: ", subset(input, 1));
console.log("Elements Greater than 3:" ,output);



