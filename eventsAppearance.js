



const innerWrapper = document.querySelector('.inner_wrapper');
const inner = document.querySelector('.inner');
const btn = document.querySelector('.inner_Btn');

btn.addEventListener('click', function(event) {
    this.style.backgroundColor = '#481752';
    this.style.opacity = '0.6';
    //console.log(btn);
    //console.log(event.target);
    event.stopPropagation();
    console.log(event.currentTarget);
    
});

inner.addEventListener('click', function(event) {
    this.style.backgroundColor = 'gray';
    //console.log(inner);
    //console.log(event.target);
    //event.stopPropagation();
    console.log(event.currentTarget);
});

innerWrapper.addEventListener('click', function(event) {
    this.style.backgroundColor = 'purple';
    //console.log(innerWrapper);
    //console.log(event.target);
    console.log(event.currentTarget);
});