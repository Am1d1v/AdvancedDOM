


const btn = document.querySelector('.container_Btn');

const eventHandler = function(event){
    console.log(event);
    btn.removeEventListener('click', eventHandler);
}

btn.addEventListener('mouseleave',()=>{
    console.log('Mouse has left the button area');
});

btn.addEventListener('click', eventHandler);
