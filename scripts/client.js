onsole.log('JS sourced');

//### Activity

//- [ ] Create an `index.html`, `style.css` and `client.js` file.


//- [ ] Create a string of city names representing the city of each group member separated by a comma.
let cities = 'Minneapolis, St. Paul, Tulsa';
console. log(cities)
//```
//let cities = 'Minneapolis, St. Paul, etc.';
//```

//- [ ] Console log whether or not the variable cities is an array (use the built in method from above).
console.log (Array.isArray(cities));

//- [ ] Turn the cities into an array using one of the built in methods above.
let citiesArray = cities.split(',');
console.log(citiesArray);
//```
//let citiesArray = cities.???;
//```
//- [ ] Loop over each city and append to the dom with `innerHTML`
let citiesElement = document.querySelector('#studentCities');
console.log('ELEMENT:', citiesElement);
//- [ ] Check whether or not your array contains 'Minneapolis' using a `for loop`
let containsMin = false;
//- [ ] Check whether or not your array contains 'Minneapolis' using a build in method
for (let x = 0; x < citiesArray.length; x++) {
    if (citiesArray[x] === 'Minneapolis') {
        containsMin = true;
        break;
    } 
}
console.log('containsMin (looped):', containsMin);
//### Stretch Goals

//- [ ] Remove white space around each of the cities (e.g 'St. Paul' instead of ' St. Paul')
for (let x = 0; x < citiesArray.length; x++) {
    console.log(citiesArray[x]);
    citiesArray[x] = citiesArray[x].trim();
    console.log(citiesArray[x]);
   }
   console.log('Trimmed citiesArray:', citiesArray);
//- [ ] Remove duplicate cities
citiesArray.push('Minneapolis'); 
citiesArray.push('Tulsa');
console.log('citiesArray before uniqueness processing:', citiesArray)

//uniqueCities

let uniqueCities = [];

for (let x of citiesArray) {
    if (uniqueCities.lastIndexOf(x) === -1) {
        uniqueCities.push(x);
    }
}
citiesArray = uniqueCities;
console.log('citiesArray after reassignment:', citiesArray);

//
