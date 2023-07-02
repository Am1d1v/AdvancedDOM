

/*

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
//console.log(wrapper.closest('body'));
//console.log(wrapper.childNodes);
//console.log([...wrapper.children][0]);
console.log(wrapper.parentElement);

const wrapperButton = document.querySelectorAll('.wrapper_button');
console.log(wrapperButton);
console.log(wrapperButton[0].closest('.wrapper'));

console.log(wrapperButton[0].previousSibling);
console.log(wrapperButton[0].nextElementSibling);
console.log(wrapperButton[0].nextSibling);

*/

document.addEventListener('DOMContentLoaded', function(e){
    console.log('DOM Content Loaded');
    console.log(e);
});


window.addEventListener('load', function(e){
    console.log('All Content Loaded');
    console.log(e);
});

window.addEventListener('beforeunload', function(e){
   e.preventDefault();
   e.returnValue = '';
});