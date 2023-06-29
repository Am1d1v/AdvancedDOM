


//console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const element = document.querySelector('.container');
const elements = document.querySelectorAll('.container');
console.log(element);
console.log(elements);

const button1 = document.createElement('button');
button1.textContent = "newButton";
button1.style.width = "100px";
button1.style.height = "60px";
button1.style.fontSize = "18px";
button1.style.borderRadius = "6px";

const button2 = document.createElement('button');
button2.textContent = "newButton";
button2.style.width = "100px";
button2.style.height = "60px";
button2.style.fontSize = "18px";
button2.style.backgroundColor = "gray";
button2.style.borderRadius = "6px";

element.append(button1);
element.prepend(button2);

button1.addEventListener("click",() => {
    button2.remove();
})

