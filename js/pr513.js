const paragraph = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let pr13 = document.querySelector(".pr13");
let pr113 = document.querySelector(".pr113");

pr13.innerHTML = paragraph;
pr113.innerHTML =paragraph.replaceAll("dog", 'cat')



