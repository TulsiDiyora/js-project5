let pr53 = document.querySelector(".pr53");
let pr532 = document.querySelector(".pr532");
function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];

    let min = Math.min(...Arr);
    let max = Math.max(...Arr);
    
    pr53.innerHTML = "Minimum Value :" + min;
    pr532.innerHTML = "Maximum Value :" + max;
}

findMinMax()