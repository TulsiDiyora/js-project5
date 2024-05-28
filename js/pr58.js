const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let pr58 = document.querySelector('.pr58');

const result = words.filter((word) => word.length > 8);

pr58.innerHTML = result;
