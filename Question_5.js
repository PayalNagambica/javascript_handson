function longest_substring(input) {
	var chars = input.split('');
	var curr_char;
	var str = "";
	var long_String = "";
	var hash = {};
	for (var i = 0; i < chars.length; i++) {
		curr_char = chars[i];
		if (!hash[chars[i]]) 
		{ 
			str += curr_char; 
			hash[chars[i]] = {index:i};
		}
		else 
		{
			if(long_String.length <= str.length)
			{
				long_String = str;
			}
			var dupeIndex = hash[curr_char].index;
			var str_FromPrevDupe = input.substring(dupeIndex + 1, i);
			str = str_FromPrevDupe + curr_char;
			hash = {};
			for (var j = dupeIndex + 1; j <= i; j++) {
				hash[input.charAt(j)] = {index:j};
			}
		}
	}
	return long_String.length > str.length ? long_String : str;
}
console.log(longest_substring("Harry Potter")); 
console.log(longest_substring("Bamboo Bamboo")); 
console.log(longest_substring("google.com")); 
console.log(longest_substring("yahoo.com")); 
console.log(longest_substring("The united States of America")); 


