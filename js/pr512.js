let pr12 = document.querySelector('.pr12');
let pr112 = document.querySelector('.pr112');
function hello(name) {
    pr12.innerHTML = name;
    pr112.innerHTML = name.length;
}

let name = "tulsi";
hello(name);