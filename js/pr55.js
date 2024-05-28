let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let pr55 = document.querySelector(".pr55");

let positive_array = numbers.filter(function(value) {
    return value >= 0; });

pr55.innerHTML = positive_array;
