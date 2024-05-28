const arr3 = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
const arr4 = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

let pr57 = document.querySelector('.pr57');
let pr572 = document.querySelector('.pr572');

arr3.sort(function(a, b) {
    return a - b;
});
arr4.sort(function(a, b) {
    return b - a;
});

pr57.innerHTML = arr3;
pr572.innerHTML = arr4;