// // var recipe = {
// //     'title': 'Mole',
// //     'servings': 2,
// //     'ingredients': ['cumin', 'cinnamon', 'cocoa']
// // };

// // console.log("Title:",recipe.title);
// // console.log('Servings: ' + recipe.servings);
// // console.log("My Secret Ingredients are:");
// // for (var i = 0; i < recipe.ingredients.length; i++) {
// //     console.log(recipe.ingredients[i]);
// // }


// function Video(title, uploader, seconds) {
//     this.title = title;
//     this.uploader = uploader;
//     this.seconds = seconds;
// }

// Video.prototype.watch = function() {
//     console.log("You watched all " + this.seconds + " seconds of " + this.title);
// };

// var vid = new Video("Otters Holding Hands", "cynthia holmes", 240);
// vid.watch();


// var vid2 = new Video("Hakuna Matata", "elreydeleon", 300);
// vid2.watch();

function Lifetime_Expence(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of coffee until your old age of ' + maxAge;
  console.log(message);
}

Lifetime_Expence(28, 36);
Lifetime_Expence(28, 2.5);
Lifetime_Expence(28, 400);
Lifetime_Expence(28, 100.7);



    