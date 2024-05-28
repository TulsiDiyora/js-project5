// find position char-------------------------------

const sentence = 'airplane';
let pr59 = document.querySelector(".pr59");

let index = 2;

pr59.innerHTML = `airplan position ${index} = ${sentence.at(index)}`

// oXoXoX------------------------

let x = "oxoxoxox";
let pr592 = document.querySelector(".pr592");
let output = "";

for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
        output += x[i].toLowerCase();
    } else {
        output += x[i].toUpperCase();
    }
}

pr592.innerHTML = "Output :" + output;

// uppercase-----------------------------

const city = "a new java book";
let pr593 = document.querySelector(".pr593");

// console.log(city.toLocaleUpperCase('en-US'));
pr593.innerHTML  = city.toLocaleUpperCase('en-US');
// Expected output: "ISTANBUL"

