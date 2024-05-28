const arraycolor = ["Red", "Green", "White", "Black"];
const arraycolor2 = ["Red", "Green", "White", "Black"];
const arraycolor3 = ["Red", "Green", "White", "Black"];
const arraycolor4 = ["Red", "Green", "White", "Black"];
const arraycolor5 = ["Red", "Green", "White", "Black"];

let pr51 = document.querySelector(".pr51");
let pr511 = document.querySelector(".pr511");
let pr512 = document.querySelector(".pr512");
let pr513 = document.querySelector(".pr513");
let pr514 = document.querySelector(".pr514");
let pr515 = document.querySelector(".pr515");

arraycolor3.pop();
arraycolor5.splice(4, 1, 'orange');

pr51.innerHTML = arraycolor.join(",");
pr511.innerHTML = arraycolor2.join("+") ;
pr512.innerHTML = arraycolor3;
pr513.innerHTML = arraycolor3.shift();
pr514.innerHTML = arraycolor3;
pr515.innerHTML = arraycolor5;

