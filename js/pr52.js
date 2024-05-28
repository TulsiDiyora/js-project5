let array1 = [1, 2, 3, 4, 5, 6];
let sum = 0;

let pr52 = document.querySelector(".pr52");
let pr521 = document.querySelector(".pr521");

for (let i=0; i<array1.length; i++) {
    sum  += array1[i] ;
}
pr52.innerHTML = array1.join("+");
pr52.innerHTML += "<br>" + "<br>";
pr52.innerHTML += "Sum is =" + sum; 


// foreach-------------------

let arr1 = [7, 8, 9, 10, 11];

arr1.forEach((el) => sum += el);
pr521.innerHTML = arr1.join("+");
pr521.innerHTML += "<br>" + "<br>";
pr521.innerHTML += "Sum is = " + sum;

 