



const innerWrapper = document.querySelector('.inner_wrapper');
const inner = document.querySelector('.inner');
const btn = document.querySelector('.inner_Btn');

btn.addEventListener('click', function() {
    this.style.backgroundColor = '#481752';
    this.style.opacity = '0.6';
    console.log(btn);
});

inner.addEventListener('click', function() {
    this.style.backgroundColor = 'gray';
    console.log(inner);
});

innerWrapper.addEventListener('click', function() {
    this.style.backgroundColor = 'purple';
    console.log(innerWrapper);
});