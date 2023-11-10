console.log('JS sourced');

let cities = 'Minneapolis, St.Paul, Tulsa'; 
console.log(Array.isArray(cities));

let citiesArray = cities.split(',');
console.log (citiesArray); 


let citiesElement = document.querySelector('#studentCities');
console. log('Elements:', citiesElement); // ('Element', + ) can be used too?

for (let city of citiesArray) {
    citiesElement.innerHTML += '<li>${city}</li>'; //p instead of li?
}

let containsMinneapolis = false;
for (let x = 0; x < citiesArray.length; x++) {
    if (citiesArray[x] === 'Minneapolis'); {
        containsMinneapolis = true;
        break;
    }
    //break?
}
console.log('Contains Minneapolis: ',  containsMinneapolis);// + or (', )


containsMinneapolis = false; //build in method
if (citiesArray.lastIndexOf('Minneapolis') != -1) {
    containsMinneapolis = true;
} else {
    containsMinneapolis = false;
}
console.log('containsMinneapolis (build in method):', containsMinneapolis);

for (let x = 0; x < citiesArray.length; x++) {
    citiesArray[x] = citiesArray[x].trim ();
}   
    console.log (citiesArray[x]);   
    console. log('Trim spacing in citiesArray',  citiesArray);

    //duplicate cities?
    
    citiesArray.push('Minneapolis');
    citiesArray.push('Tulsa');
    console. log('citiesArray before uniqueness change', citiesArray);

    let uniqueCities =[];
    let x = citiesArray
    for (let x of citiesArray) {
        if (uniqueCities.lastIndexOf(x) === -1); {
            uniqueCities.push(x);
         } // astindexof(x)?
    }
    console. log('uniqueCities',  uniqueCities);
    citiesArray = uniqueCities;
    console. log('citiesArray changed:', citiesArray);
