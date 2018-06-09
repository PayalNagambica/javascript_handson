var favourites = ['Apple', 'Mango', 'Pineapple', 'Peach', 'Melon'];
console.log("My Favourite List Part 1.")
for (var i = 0; i < favourites.length; i++) {
    console.log('My *' + (i + 1) + ' choice is ' + favourites[i]+'!!!');
}
console.log("\nMy Favourite List Part 2.")
for (var i = 0; i < favourites.length; i++) {
    var favouriteNum = i + 1;
    var favouriteNumSuffix;
    if (favouriteNum == 1) {
        favouriteNumSuffix = 'st';
    } else if (favouriteNum == 2) {
        favouriteNumSuffix = 'nd';
    } else if (favouriteNum == 3) {
        favouriteNumSuffix = 'rd';
    } else {
        favouriteNumSuffix = 'th';
    }
    console.log('My ' + favouriteNum + favouriteNumSuffix + ' choice is ' + favourites[i]+'...');
}

    