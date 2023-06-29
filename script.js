


//console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const element = document.querySelector('.container');
const elements = document.querySelectorAll('.container');
console.log(element);
console.log(elements);

const button = document.createElement('button');
button.textContent = "newButton";
button.style.width = "100px";
button.style.height = "60px";
button.style.fontSize = "18px";

element.append(button);